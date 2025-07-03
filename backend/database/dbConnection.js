import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Radik_MERN",
    });
    console.log("Verbindung zur Datenbank erfolgreich hergestellt!");
  } catch (error) {
    console.error("Fehler bei der Datenbankverbindung:", error);
    process.exit(1); // Beendet den Prozess bei Verbindungsfehler
  }
};
