import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface FormData {
  name: string;
  role: string;
  company: string;
  poolSize: string;
  email: string;
  phone: string;
  projectDetails: string;
  services: string[];
  clientFullName?: string;
  clientPhone?: string;
  clientEmail?: string;
  clientAddress?: string;
  clientCompany?: string;
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const rawData = form.get('data');
    if (!rawData || typeof rawData !== 'string') {
      throw new Error('Datos de formulario inválidos o ausentes.');
    }
    const formData: FormData = JSON.parse(rawData);

    const galleryFiles = form.getAll('galleryImages') as File[];
    const capturedImages = form.getAll('capturedImages').filter(i => typeof i === 'string') as string[];

    const attachments = [];

    // Archivos desde galería
    for (const file of galleryFiles) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Imágenes base64 (captura directa)
    capturedImages.forEach((base64, i) => {
      const base64Data = base64.split(',')[1];
      attachments.push({
        filename: `captured-${i + 1}.jpg`,
        content: Buffer.from(base64Data, 'base64'),
        encoding: 'base64',
      });
    });

    const transportOptions: SMTPTransport.Options = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_APP_PASSWORD || '',
      },
    };

    const transporter = nodemailer.createTransport(transportOptions);

    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: formData.email,
      subject: `Nueva solicitud de servicio de piscina de ${formData.name}`,
      html: generateEmailHTML(formData),
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error completo:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// HTML del correo (puedes dejarlo igual al anterior)
function generateEmailHTML(formData: FormData): string {
  const {
    name, role, company, poolSize,
    email, phone, projectDetails, services,
    clientFullName, clientPhone, clientEmail, clientAddress, clientCompany
  } = formData;

  const servicesHTML = services?.length
    ? `<ul>${services.map(s => `<li>${s}</li>`).join('')}</ul>` : '<p>Sin servicios seleccionados.</p>';

  const clientHTML = (role !== 'Pool Owner' && clientFullName) ? `
    <div>
      <h2>Información del Cliente</h2>
      <p><strong>Nombre:</strong> ${clientFullName}</p>
      ${clientPhone ? `<p><strong>Teléfono:</strong> ${clientPhone}</p>` : ''}
      ${clientEmail ? `<p><strong>Email:</strong> ${clientEmail}</p>` : ''}
      ${clientAddress ? `<p><strong>Dirección:</strong> ${clientAddress}</p>` : ''}
      ${clientCompany ? `<p><strong>Empresa:</strong> ${clientCompany}</p>` : ''}
    </div>
  ` : '';

  return `
    <div style="font-family: Arial; color: #333;">
      <h1>Nueva Solicitud de Servicio de Piscina</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Rol:</strong> ${role}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      ${poolSize ? `<p><strong>Tamaño de piscina:</strong> ${poolSize} galones</p>` : ''}
      ${clientHTML}
      <h2>Servicios Solicitados</h2>
      ${servicesHTML}
      ${projectDetails ? `<h2>Detalles del Proyecto</h2><p>${projectDetails}</p>` : ''}
    </div>
  `;
}
