
// import nodemailer from 'nodemailer'

// export const kontaktConfirmation = async (nachName, email) => {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   })

//   const emailContent = `
//     <html>
//       <body>
//         <h2>Kontaktanfrage erhalten</h2>
//         <p>Sehr geehrte*r Herr/Frau <strong>${nachName}</strong>,</p>
//         <p>Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
//         <p>Bei Fragen können Sie gerne direkt antworten.</p>
//         <p>Viele Grüße<br /><strong>Aziz</strong></p>

//       </body>
//     </html>
//   `

//   try {
//     await transporter.sendMail({
//       from: `"Aziz" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Bestätigung Ihrer Kontaktanfrage',
//       html: emailContent,
//     })
//   } catch (error) {
//     console.error('Fehler beim Senden der E-Mail:', error)
//     throw new Error('E-Mail konnte nicht gesendet werden.')
//   }
// }
