import express from "express"; 
import { readFileSync } from "fs";

const data = JSON.parse(readFileSync("./data.json", "utf8"));

const app = express();

// Parse JSON
app.use(express.json());

// Basic GET route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Example API endpoint
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Example POST
app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.json({ received: req.body });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export for Vercel
export default app;
