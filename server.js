import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import aboutRouter from "./routers/aboutRouter.js";
import homeRouter from "./routers/homeRouter.js";
import servicesRouter from "./routers/servicesRouter.js";
import portfolioRouter from "./routers/portfolioRouter.js";
import contactRouter from "./routers/contactRouter.js";
import services_Details_Router from "./routers/services/index.js";
import footerRouter from "./routers/footerRouter.js";
import headerRouter from "./routers/headerRouter.js";
import heroRouter from "./routers/heroRouter.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.use("/api/about", aboutRouter);
app.use("/api/home", homeRouter);
app.use("/api/services", servicesRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api", contactRouter);
app.use("/api/services", services_Details_Router);
app.use("/api/footer", footerRouter);
app.use("/api/site", headerRouter);
app.use("/api/hero", heroRouter);

// --- Serve Vite frontend ---
app.use(express.static(path.join(__dirname, "client", "dist")));

// All other routes should serve React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Freakbirds Backend + Frontend running on port ${PORT}`);
});
