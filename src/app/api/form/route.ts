import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Obtenemos los datos enviados desde el cliente
    const rawData = form.get('data');
    if (!rawData || typeof rawData !== 'string') {
      throw new Error("Datos de formulario inválidos o ausentes.");
    }
    const data = JSON.parse(rawData);
        const galleryFiles = form.getAll('galleryImages') as File[];
    const capturedImages = form.getAll('capturedImages').filter(i => typeof i === 'string') as string[];

    // Preparamos los archivos adjuntos
    const attachments = [];

    // Archivos seleccionados de la galería
    for (const file of galleryFiles) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Imágenes capturadas con la webcam (base64)
    capturedImages.forEach((base64, i) => {
      const base64Data = base64.split(',')[1];
      attachments.push({
        filename: `captured-${i + 1}.jpg`,
        content: Buffer.from(base64Data, 'base64'),
        encoding: 'base64',
      });
    });

    // Configurar transporte SMTP con Mailtrap
    const transportOptions: SMTPTransport.Options = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: process.env.EMAIL_SECURE === 'true', // true para 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(transportOptions);

    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `Nueva solicitud de servicio de piscina de ${data.name}`,
      html: generateEmailHTML(data),
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);
    console.log('FormData keys:', Array.from(form.keys()));
console.log('Gallery files:', galleryFiles.length);
console.log('Captured images:', capturedImages.length);
console.log({
  host: process.env.EMAIL_HOST,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_APP_PASSWORD,
  to: process.env.OWNER_EMAIL,
});


    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error completo:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Aquí sigue tu función generateEmailHTML igual que antes.
// Generador HTML igual que antes (puedes dejarlo como ya lo tienes)
function generateEmailHTML(formData: any): string {
  const {
    name, role, company, poolSize,
    email, phone, projectDetails, services,
    clientFullName, clientPhone, clientEmail, clientAddress, clientCompany
  } = formData;

  const servicesHTML = services?.map((s: string) => `<li>${s}</li>`).join('') || '';

  const clientInfo = clientFullName ? `
    <h3>Cliente:</h3>
    <p><strong>Nombre:</strong> ${clientFullName}</p>
    ${clientPhone ? `<p><strong>Teléfono:</strong> ${clientPhone}</p>` : ''}
    ${clientEmail ? `<p><strong>Email:</strong> ${clientEmail}</p>` : ''}
    ${clientAddress ? `<p><strong>Dirección:</strong> ${clientAddress}</p>` : ''}
    ${clientCompany ? `<p><strong>Empresa:</strong> ${clientCompany}</p>` : ''}
  ` : '';

  return `
    <h2>Solicitud de Servicio</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Rol:</strong> ${role}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${phone}</p>
    <p><strong>Empresa:</strong> ${company}</p>
    <p><strong>Tamaño de piscina:</strong> ${poolSize}</p>
    <p><strong>Servicios:</strong></p>
    <ul>${servicesHTML}</ul>
    ${projectDetails ? `<p><strong>Mensaje:</strong> ${projectDetails}</p>` : ''}
    ${clientInfo}
  `;
}