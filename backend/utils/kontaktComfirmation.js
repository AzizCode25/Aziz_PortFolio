import nodemailer from 'nodemailer';

export const kontaktConfirmation = async (name, email) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    <html>
      <body>
        <h2>Kontaktbestätigung</h2>
        <p>Hallo <strong>${name}</strong>,</p>
        <p>vielen Dank für Ihre Nachricht!</p>
        <p>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <br>
        <p>Mit freundlichen Grüßen,<br><strong>Ihr Radik-Team</strong></p>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Radik Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Bestätigung Ihrer Kontaktanfrage',
      html: emailContent,
    });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    throw new Error('E-Mail konnte nicht gesendet werden.');
  }
};
