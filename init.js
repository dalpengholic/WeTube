import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";



const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Listening on http://localhost:${PORT}`);

app.listen(PORT,handleListening);

// Model - Data
// View - How does the data look?
// Control - function that looks for the data 