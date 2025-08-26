import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv';
import contactRouter from './router/kontaktRouter.js';
import cors from 'cors';

dotenv.config({ path: './config/.env' });

const app = express();

// CORS-Konfiguration
app.use(
  cors({
    origin: "https://aziz-port-folio.vercel.app", // .trim() entfernt Leerzeichen
    methods: ['POST'],
    credentials: true,
  })
);


// Body-Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routen
app.use('/api/v1/contact', contactRouter);


// Datenbankverbindung herstellen
dbConnection();

// Optional: Fehler-Handler Middleware (für saubere Fehlerbehandlung)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Ein interner Serverfehler ist aufgetreten.',
  });
});

export default app;
