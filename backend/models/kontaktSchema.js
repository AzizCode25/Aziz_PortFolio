import mongoose from 'mongoose';
import validator from 'validator';

const kontaktSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name ist erforderlich!'], minlength: 3, trim: true },
  nachName: { type: String, required: [true, 'Nachname ist erforderlich!'], minlength: 3, trim: true },
  email: {
    type: String,
    required: [true, 'E-Mail ist erforderlich!'],
    validate: [validator.isEmail, 'Bitte eine gültige E-Mail-Adresse angeben.'],
    lowercase: true,
    trim: true
  },
  telefon: { type: String, minlength: 10, trim: true }, // optional
  nachricht: { type: String, required: [true, 'Nachricht ist erforderlich!'], minlength: 5, trim: true }
});


export const Kontakt = mongoose.model('Kontakt', kontaktSchema);
