import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_CONFIG } from '@/config/constants';

export const runtime = 'nodejs';

// Aumentar el límite de body parser
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Archivos adjuntos para Resend
    const attachments = [];

    const galleryFiles = form.getAll('galleryImages') as File[];
    for (const file of galleryFiles) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    const capturedImages = form.getAll('capturedImages').filter(i => typeof i === 'string') as string[];
    capturedImages.forEach((base64, i) => {
      // base64 viene formato "data:image/jpeg;base64,....."
      const base64Data = base64.split(',')[1];
      if (base64Data) {
        attachments.push({
          filename: `captured-${i + 1}.jpg`,
          content: Buffer.from(base64Data, 'base64'),
        });
      }
    });

    // Enviar correo con Resend
    const { data, error } = await resend.emails.send({
      from: 'Pool Quality Solutions <notifications@guimarais.com>',
      to: [process.env.OWNER_EMAIL || SITE_CONFIG.ownerEmail],
      replyTo: formData.email,
      subject: `Nueva solicitud de servicio: ${formData.name}`,
      html: generateEmailHTML(formData),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Error Resend:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log('Correo enviado con éxito:', data?.id);
    return NextResponse.json({ success: true, id: data?.id });

  } catch (error: any) {
    console.error('Error completo:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

function generateEmailHTML(formData: FormData): string {
  const {
    name, role, company, poolSize,
    email, phone, projectDetails, services,
    clientFullName, clientPhone, clientEmail, clientAddress, clientCompany
  } = formData;

  const servicesHTML = services?.length
    ? `<ul>${services.map(s => `<li>${s}</li>`).join('')}</ul>`
    : '<p>Sin servicios seleccionados.</p>';

  const clientHTML = (role !== 'Pool Owner' && clientFullName) ? `
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 15px;">
      <h3 style="margin-top: 0; color: #444;">👷 Información del Cliente (Técnico/Contratista)</h3>
      <p><strong>Nombre Cliente Final:</strong> ${clientFullName}</p>
      ${clientPhone ? `<p><strong>Teléfono:</strong> ${clientPhone}</p>` : ''}
      ${clientEmail ? `<p><strong>Email:</strong> ${clientEmail}</p>` : ''}
      ${clientAddress ? `<p><strong>Dirección:</strong> ${clientAddress}</p>` : ''}
      ${clientCompany ? `<p><strong>Empresa:</strong> ${clientCompany}</p>` : ''}
    </div>
  ` : '';

  return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 10px;">
        Nueva Solicitud de Servicio
      </h1>
      
      <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <h2 style="margin-top: 0; color: #0369a1;">Contacto Principal</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Rol:</strong> ${role}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        ${poolSize ? `<p><strong>Tamaño Piscina:</strong> ${poolSize} gls</p>` : ''}
      </div>

      ${clientHTML}

      <div style="margin-top: 20px;">
        <h3 style="color: #444;">🛠 Servicios Solicitados</h3>
        ${servicesHTML}
      </div>

      ${projectDetails ? `
        <div style="margin-top: 20px;">
          <h3 style="color: #444;">📝 Detalles del Proyecto</h3>
          <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">${projectDetails}</p>
        </div>
      ` : ''}

      <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">
        Este correo fue enviado desde el formulario web de Pool Quality Solutions.
      </p>
    </div>
  `;
}
