import mongoose from 'mongoose';
import validator from 'validator';

const kontaktSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name ist erforderlich!'],
    minlength: [3, 'Der Name muss mindestens 3 Zeichen lang sein.'],
    trim: true, // entfernt führende und nachfolgende Leerzeichen
  },
   nachName: {
    type: String,
    required: [true, 'Nachname ist erforderlich!'],
    minlength: [3, 'Der Name muss mindestens 3 Zeichen lang sein.'],
    trim: true, // entfernt führende und nachfolgende Leerzeichen
  },
  email: {
    type: String,
    required: [true, 'E-Mail ist erforderlich!'],
    validate: {
      validator: validator.isEmail,
      message: 'Bitte eine gültige E-Mail-Adresse angeben.',
    },
    lowercase: true, // speichert die Email klein geschrieben
    trim: true,
  },
  telefon: {
    type: String,
    required: [true, 'Telefonnummer ist erforderlich!'],
    minlength: [10, 'Die Telefonnummer muss mindestens 10 Ziffern enthalten.'],
    trim: true,
  },
  nachricht: {
    type: String,
    required: [true, 'Nachricht ist erforderlich!'],
    minlength: [5, 'Die Nachricht muss mindestens 5 Zeichen lang sein.'],
    trim: true,
  },
});

export const Kontakt = mongoose.model('Kontakt', kontaktSchema);
