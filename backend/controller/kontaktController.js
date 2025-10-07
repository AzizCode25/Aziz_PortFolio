import { Kontakt } from "../models/kontaktSchema.js";
import { sendAdminNotification, kontaktConfirmation } from "../utils/emailService.js";

export const sendeKontakt = async (req, res) => {
  const { name, nachName, email, telefon, nachricht } = req.body;

  try {
    // Validierung der Eingaben
    if (!name || !nachName || !email || !telefon || !nachricht) {
      return res.status(400).json({
        success: false,
        message: "Alle Felder sind erforderlich!",
      });
    }

    // Nachricht in der Datenbank speichern
    await Kontakt.create({ name, nachName, email, telefon, nachricht });

    // Bestätigung an den Kunden (Resend)
    await kontaktConfirmation(nachName, email);

    // Benachrichtigung an dich selbst (Resend)
    await sendAdminNotification({ name, nachName, email, telefon, nachricht });

    // Erfolgsmeldung zurückgeben
    return res.status(200).json({
    success: true,
    message: "Danke für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.",
  });

  } catch (error) {
    console.error("Fehler beim Senden der Nachricht:", error.message);

    return res.status(500).json({
      success: false,
      message: "Interner Serverfehler. Bitte versuchen Sie es später erneut.",
    });
  }
};



// import { Kontakt } from '../models/kontaktSchema.js'
// import { kontaktConfirmation } from '../utils/kontaktComfirmation.js'
// import { sendAdminNotification } from '../utils/emailService.js' // Pfad anpassen!
// import { sendAdminNotification, kontaktConfirmation } from "../utils/emailService.js";

// export const sendeKontakt = async (req, res) => {
//   const { name, nachName, email, telefon, nachricht } = req.body

//   try {
//     if (!name || !nachName || !email || !telefon || !nachricht) {
//       return res.status(400).json({
//         success: false,
//         message: 'Alle Felder sind erforderlich!',
//       })
//     }

//     await Kontakt.create({ name, nachName, email, telefon, nachricht })

//     // Bestätigung an Kunde
//     await kontaktConfirmation(nachName, email)

//     // Benachrichtigung an dich
//     await sendAdminNotification({ name, nachName, email, telefon, nachricht })

//     return res.status(200).json({
//       success: true,
//       message: 'Nachricht erfolgreich gesendet und E-Mail verschickt!',
//     })
//   } catch (error) {
//     if (error.name === 'ValidationError') {
//       let errorMessage = ''
//       if (error.errors.name) {
//         errorMessage += error.errors.name.message
//       }
//       if (error.errors.nachName) {
//         errorMessage += error.errors.nachName.message
//       }
//       if (error.errors.email) {
//         errorMessage += error.errors.email.message
//       }
//       if (error.errors.telefon) {
//         errorMessage += error.errors.telefon.message
//       }
//       if (error.errors.nachricht) {
//         errorMessage += error.errors.nachricht.message
//       }
//       return res.status(400).json({
//         success: false,
//         message: errorMessage,
//       })
//     }
//     console.error('Fehler beim Senden der Nachricht:', error.message)
//     return res.status(500).json({
//       success: false,
//       message: 'Interner Serverfehler. Bitte versuchen Sie es später erneut.',
//     })
//   }
// }
