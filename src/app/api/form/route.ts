import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// Define los tipos para evitar errores de TypeScript
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
    // Obtener los datos del formulario desde el cuerpo de la solicitud
    const formData: FormData = await request.json();

    // Configuración de transporte para nodemailer
    let transportOptions: SMTPTransport.Options;

    // Usar diferentes configuraciones dependiendo de las variables de entorno
    if (process.env.EMAIL_HOST) {
      // Configuración SMTP personalizada
      transportOptions = {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER || '',
          pass: process.env.EMAIL_APP_PASSWORD || '',
        }
      };
    } else if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      // Configuración para Gmail u otros servicios conocidos
      transportOptions = {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        }
      };
    } else {
      // Configuración para desarrollo con Ethereal
      transportOptions = {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'pyvtekn7ouxy2gpa@ethereal.email',
          pass: 'T2tpnSAsXzWqfPBEgV',
        }
      };
    }

    // Crear transporte con las opciones configuradas
    const transporter = nodemailer.createTransport(transportOptions);

    // Correo electrónico de destino - Usa la variable de entorno OWNER_EMAIL
    const destinationEmail = process.env.OWNER_EMAIL || 'correo-del-dueño@ejemplo.com';

    // Configurar el correo (ACTUALIZAR EL @TUDOMINIO.COM)
    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER || 'noreply@tudominio.com'}>`,
      to: destinationEmail,
      replyTo: formData.email,
      subject: `Nueva solicitud de servicio de piscina de ${formData.name}`,
      html: generateEmailHTML(formData),
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: %s', info.messageId);
    
    // Si usas Ethereal para desarrollo, muestra la URL para ver el correo
    if (info.messageId && transportOptions.host === 'smtp.ethereal.email') {
      console.log('Vista previa del correo: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json(
      { success: true, message: 'Correo enviado correctamente' },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Manejo de error con tipo correcto
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Error al enviar el correo:', errorMessage);
    
    return NextResponse.json(
      { success: false, message: 'Error al enviar el correo', error: errorMessage },
      { status: 500 }
    );
  }
}

// Función para generar el HTML del correo con tipo específico
function generateEmailHTML(formData: FormData): string {
  const {
    name,
    role,
    company,
    poolSize,
    email,
    phone,
    projectDetails,
    services,
    clientFullName,
    clientPhone,
    clientEmail,
    clientAddress,
    clientCompany
  } = formData;

  // Formatear la lista de servicios
  let servicesHTML = '';
  if (services && services.length > 0) {
    servicesHTML = `
      <ul style="padding-left: 20px;">
        ${services.map((service: string) => `<li>${service}</li>`).join('')}
      </ul>
    `;
  }

  // Crear sección para información del cliente si aplica
  let clientHTML = '';
  if (role !== 'Pool Owner' && clientFullName) {
    clientHTML = `
      <div style="margin-top: 20px; padding: 15px; background-color: #f7f7f7; border-radius: 5px;">
        <h2 style="color: #2c3e50; font-size: 18px; margin-top: 0;">Información del Cliente</h2>
        <p><strong>Nombre completo:</strong> ${clientFullName}</p>
        ${clientPhone ? `<p><strong>Teléfono:</strong> ${clientPhone}</p>` : ''}
        ${clientEmail ? `<p><strong>Correo electrónico:</strong> ${clientEmail}</p>` : ''}
        ${clientAddress ? `<p><strong>Dirección:</strong> ${clientAddress}</p>` : ''}
        ${clientCompany ? `<p><strong>Empresa:</strong> ${clientCompany}</p>` : ''}
      </div>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <h1 style="color: #2c3e50; font-size: 24px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nueva Solicitud de Servicio de Piscina</h1>
      
      <div style="margin-top: 20px;">
        <h2 style="color: #2c3e50; font-size: 18px;">Información de Contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Rol:</strong> ${role}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        <p><strong>Correo electrónico:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        ${poolSize ? `<p><strong>Tamaño de la piscina:</strong> ${poolSize} galones</p>` : ''}
      </div>
      
      ${clientHTML}
      
      <div style="margin-top: 20px;">
        <h2 style="color: #2c3e50; font-size: 18px;">Servicios Solicitados</h2>
        ${servicesHTML}
      </div>
      
      ${projectDetails ? `
        <div style="margin-top: 20px;">
          <h2 style="color: #2c3e50; font-size: 18px;">Detalles del Proyecto</h2>
          <p style="white-space: pre-line;">${projectDetails}</p>
        </div>
      ` : ''}
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777;">
        <p>Este correo fue enviado desde el formulario de contacto de tu sitio web.</p>
      </div>
    </div>
  `;
}