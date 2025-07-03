import nodemailer from 'nodemailer'

export const kontaktConfirmation = async (nachName, email) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const emailContent = `
    <html>
      <body>
        <h2>Ihre Kontaktanfrage ist eingegangen</h2>
        <p>Sehr geehrte*r <strong>Herr/Frau ${nachName}</strong>,</p>
        <p>vielen Dank für Ihre Nachricht und Ihr Interesse.</p>
        <p>Ich habe Ihre Anfrage erhalten und werde mich innerhalb von 24 Stunden bei Ihnen melden.</p>
        <p>Falls Sie in der Zwischenzeit Fragen haben, können Sie gerne direkt auf diese E-Mail antworten.</p>
        <br>
        <p>Viele Grüße<br><strong>Aziz</strong></p>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"Aziz" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Bestätigung Ihrer Kontaktanfrage',
      html: emailContent,
    })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    throw new Error('E-Mail konnte nicht gesendet werden.')
  }
}
