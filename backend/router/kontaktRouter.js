import express from "express"
import { sendeKontakt } from "../controller/kontaktController.js";

const router = express.Router()

router.post("/send", sendeKontakt)

export default router;