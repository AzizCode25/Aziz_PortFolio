import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

// Prüfen, ob der API-Key geladen ist
if (!process.env.RESEND_API_KEY) {
  console.error("FEHLER: RESEND_API_KEY nicht gefunden! Bitte .env oder Render-Umgebungsvariable prüfen.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Admin-Benachrichtigung an dich selbst
export const sendAdminNotification = async ({ name, nachName, email, telefon, nachricht }) => {
  try {
    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name} ${nachName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon}</p>
      <p><strong>Nachricht:</strong> ${nachricht}</p>
    `;

    await resend.emails.send({
      from: "Aziz Portfolio <aziz@azizcode.com>", // funktioniert sofort ohne Domain-Setup
      to: process.env.EMAIL_USER,                     // sendet an dein Gmail
      subject: "Neue Kontaktanfrage eingegangen",
      html,
      reply_to: email,                                // damit du direkt antworten kannst
    });

    console.log("Admin-Benachrichtigung erfolgreich gesendet!");
  } catch (error) {
    console.error("Fehler bei Admin-Benachrichtigung:", error);
  }
};

// Bestätigung an den Benutzer
export const kontaktConfirmation = async (nachName, email) => {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <h2 style="color:#2563eb;">Kontaktanfrage erhalten</h2>
        <p>Sehr geehrte*r Herr/Frau <strong>${nachName}</strong>,</p>
        <p>vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
        <p>Bei Rückfragen können Sie direkt auf diese E-Mail antworten.</p>
        <br>
        <p>Viele Grüße<br><strong>Aziz</strong><br>azizcode.com</p>
      </div>
    `;

    await resend.emails.send({
      from: "Aziz Portfolio <aziz@azizcode.com>", // nutze resend.dev, bis deine Domain verifiziert ist
      to: email,
      subject: "Bestätigung Ihrer Kontaktanfrage",
      html,
      reply_to: "azizcode92@gmail.com", // sorgt dafür, dass Antwort bei dir ankommt
    });

    console.log(`Bestätigung an ${email} erfolgreich gesendet!`);
  } catch (error) {
    console.error("Fehler bei Bestätigungsmail:", error);
  }
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
