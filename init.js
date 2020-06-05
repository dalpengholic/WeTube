import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`✅Listening on http://localhost:${PORT}`);

app.listen(PORT,handleListening);

// Model - Data
// View - How does the data look?
// Control - function that looks for the data 