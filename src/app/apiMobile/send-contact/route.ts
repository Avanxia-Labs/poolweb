import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      company,
      experience,
      gallonsFromForm,
      message,
      services,
      clientExtraData,
      fromCalculator,
    } = body;

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '0b84a116c5cd11',
        pass: 'ca4b815245b09d',
      },
    });

    const hasCalculatorData = fromCalculator &&
      Object.values(fromCalculator).some((val) => val !== null && val !== undefined && val !== '');

    const hasClientExtraData = clientExtraData &&
      Object.values(clientExtraData).some((val) => val !== null && val !== undefined && val !== '');

    const htmlContent = `
      <h2>Información del usuario</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Experiencia:</strong> ${experience}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
      <p><strong>Galones en formulario:</strong> ${gallonsFromForm}</p>
      <p><strong>Servicios seleccionados:</strong> ${services?.join(', ') || 'N/A'}</p>

      ${
        hasCalculatorData
          ? `
        <h2>Datos desde la Calculadora</h2>
        <p><strong>Galones ingresados:</strong> ${fromCalculator?.gallons}</p>
        <p><strong>Aspirado adicional:</strong> ${fromCalculator?.vacuuming}</p>
        <p><strong>Lavado de filtro:</strong> ${fromCalculator?.filterWash}</p>
        <p><strong>Total estimado:</strong> ${fromCalculator?.total}</p>
        `
          : ''
      }

      ${
        hasClientExtraData
          ? `
        <h2>Cliente extra (si aplica)</h2>
        <p><strong>Nombre completo:</strong> ${clientExtraData.fullName}</p>
        <p><strong>Teléfono:</strong> ${clientExtraData.phone}</p>
        <p><strong>Email:</strong> ${clientExtraData.email}</p>
        <p><strong>Empresa:</strong> ${clientExtraData.company}</p>
        <p><strong>Dirección:</strong> ${clientExtraData.address}</p>
        `
          : ''
      }
    `;

    const mailOptions = {
      from: `"Formulario PoolQuality" <samuel.lopezc23@gmnail.com>`,
      to: 'samuel.lopezc23@gmnail.com',
      subject: '📩 Nuevo contacto desde calculadora + formulario',
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
