import express from "express";
import Contact from "../models/Contacts.js";  // your model

const router = express.Router();

router.get("/",async(req,res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

router.post("/", async(req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
});


export default router;