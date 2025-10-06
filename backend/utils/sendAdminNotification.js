import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: './config/.env' });

// ✅ Gmail Transport (funktioniert mit App-Passwort)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Check: Verbindung zum Mailserver testen
(async () => {
  try {
    await transporter.verify();
    console.log('📨 Mailserver bereit zum Senden ✅');
  } catch (err) {
    console.error('❌ Mailserver-Fehler:', err);
  }
})();

// ✅ Funktion zum Senden der Admin-Mail
export const sendAdminNotification = async ({ name, nachName, email, telefon, nachricht }) => {
  try {
    const adminEmailContent = `
      <html>
        <body>
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Vorname:</strong> ${name}</p>
          <p><strong>Nachname:</strong> ${nachName}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${telefon}</p>
          <p><strong>Nachricht:</strong> ${nachricht}</p>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Aziz Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Neue Kontaktanfrage eingegangen',
      html: adminEmailContent,
    });

    console.log('✅ E-Mail erfolgreich gesendet!');
  } catch (err) {
    console.error('❌ Fehler beim Senden der E-Mail:', err);
    throw err;
  }
};





// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';

// dotenv.config({ path: './config/.env' }); 

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // TLS wird nach Verbindungsaufbau aktiviert
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
  

  
// });

// export const sendAdminNotification = async ({ name, nachName, email, telefon, nachricht }) => {
//   const adminEmailContent = `
//     <html>
//       <body>
//         <h2>Neue Kontaktanfrage</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Name:</strong> ${nachName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Telefon:</strong> ${telefon}</p>
//         <p><strong>Nachricht:</strong> ${nachricht}</p>
//       </body>
//     </html>
//   `;

//   await transporter.sendMail({
//     from: `"Aziz" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,
//     subject: 'Neue Kontaktanfrage eingegangen',
//     html: adminEmailContent,
//   });


// };