import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const resend = new Resend(process.env.RESEND_API_KEY);

// 1️⃣ Admin-Benachrichtigung
export const sendAdminNotification = async ({ name, nachName, email, telefon, nachricht }) => {
  const html = `
    <h2>Neue Kontaktanfrage</h2>
    <p><strong>Name:</strong> ${name} ${nachName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${telefon}</p>
    <p><strong>Nachricht:</strong> ${nachricht}</p>
  `;
  await resend.emails.send({
    from: "Aziz Portfolio <onboarding@resend.dev>",
    to: process.env.EMAIL_USER,
    subject: "Neue Kontaktanfrage eingegangen",
    html,
  });
};

// Bestätigung an den Benutzer
export const kontaktConfirmation = async (nachName, email) => {
  const html = `
    <h2>Kontaktanfrage erhalten</h2>
    <p>Sehr geehrte*r Herr/Frau <strong>${nachName}</strong>,</p>
    <p>Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
    <p>Viele Grüße<br /><strong>Aziz</strong></p>
  `;
  await resend.emails.send({
    from: "Aziz <onboarding@resend.dev>",
    to: email,
    subject: "Bestätigung Ihrer Kontaktanfrage",
    html,
  });
};




// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';

// dotenv.config({ path: './config/.env' });

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true, // SSL verwenden!
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });



// // Funktion zum Senden der Admin-Mail
// export const sendAdminNotification = async ({ name, nachName, email, telefon, nachricht }) => {
//   try {
//     const adminEmailContent = `
//       <html>
//         <body>
//           <h2>Neue Kontaktanfrage</h2>
//           <p><strong>Vorname:</strong> ${name}</p>
//           <p><strong>Nachname:</strong> ${nachName}</p>
//           <p><strong>E-Mail:</strong> ${email}</p>
//           <p><strong>Telefon:</strong> ${telefon}</p>
//           <p><strong>Nachricht:</strong> ${nachricht}</p>
//         </body>
//       </html>
//     `;

//     await transporter.sendMail({
//       from: `"Aziz Portfolio" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       subject: 'Neue Kontaktanfrage eingegangen',
//       html: adminEmailContent,
//     });

//     console.log('E-Mail erfolgreich gesendet!');
//   } catch (err) {
//     console.error('Fehler beim Senden der E-Mail:', err);
//     throw err;
//   }
// };
