import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: './config/.env' }); 

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // TLS wird nach Verbindungsaufbau aktiviert
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendAdminNotification = async ({ name, email, telefon, nachricht }) => {
  const adminEmailContent = `
    <html>
      <body>
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Nachricht:</strong>${nachricht}</p>
      </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Radik Support" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: 'Neue Kontaktanfrage eingegangen',
    html: adminEmailContent,
  });
};