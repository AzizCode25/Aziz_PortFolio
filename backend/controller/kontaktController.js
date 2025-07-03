import { Kontakt } from '../models/kontaktSchema.js';
import { kontaktConfirmation } from '../utils/kontaktComfirmation.js';
import { sendAdminNotification } from '../utils/sendAdminNotification.js';  // Pfad anpassen!

export const sendeKontakt = async (req, res) => {
  const { name, email, telefon, nachricht } = req.body;

  try {
    if (!name || !email || !telefon || !nachricht) {
      return res.status(400).json({
        success: false,
        message: "Alle Felder sind erforderlich!",
      });
    }

    await Kontakt.create({ name, email, telefon, nachricht });

    // Bestätigung an Kunde
    await kontaktConfirmation(name, email);

    // Benachrichtigung an dich
    await sendAdminNotification({ name, email, telefon, nachricht });

    return res.status(200).json({
      success: true,
      message: "Nachricht erfolgreich gesendet und E-Mail verschickt!",
    });

  } catch (error) {

    if(error.name === "ValidationError"){
      let errorMessage = "";
      if(error.errors.name){
        errorMessage += error.errors.name.message
      }
       if(error.errors.email){
        errorMessage += error.errors.email.message
      }
       if(error.errors.telefon){
        errorMessage += error.errors.telefon.message
      }
       if(error.errors.nachricht){
        errorMessage += error.errors.nachricht.message
      }
        return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    console.error("Fehler beim Senden der Nachricht:", error.message);
    return res.status(500).json({
      success: false,
      message: "Interner Serverfehler. Bitte versuchen Sie es später erneut.",
    });
  }
};
