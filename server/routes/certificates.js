import express from "express";
import Certificate from "../models/Certificate.js";  // your model

const router = express.Router();

router.get("/",async(req,res) => {
    const certificates = await Certificate.find();
    res.json(certificates);
});

router.post("/", async(req, res) => {
    const certificates = new Certificate(req.body);
    await certificate.save();
    res.json(certificate);
});


export default router;