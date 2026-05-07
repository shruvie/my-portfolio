import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/projects.js";
import skillRoutes from "./routes/skills.js";
import certificateRoutes from "./routes/certificates.js";
import contactRoutes from "./routes/contacts.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
app.listen(process.env.PORT, () => console.log("Server running"));

app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/certificates', certificateRoutes);
app.use('/contacts', contactRoutes);