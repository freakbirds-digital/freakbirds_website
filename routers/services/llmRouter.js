import express from "express";

const router = express.Router();

// Features
const features = [
  { icon: "Cpu", title: "Custom Model Training", description: "Tailored AI models trained on your specific data and business requirements." },
  { icon: "Database", title: "Data Processing", description: "Advanced data preparation, cleaning, and optimization for model training." },
  { icon: "Zap", title: "Performance Optimization", description: "Fine-tuning and optimization to achieve maximum model accuracy and efficiency." },
  { icon: "Target", title: "Domain Expertise", description: "Specialized models for your industry with deep understanding of business context." },
];

// Services list
const services = [
  "Custom LLM Development & Training",
  "Data Collection & Preprocessing", 
  "Model Fine-tuning & Optimization",
  "API Integration & Deployment",
  "Performance Monitoring & Analytics",
  "Chatbot & Virtual Assistant Development",
  "Natural Language Processing Solutions",
  "Content Generation Systems",
  "AI Model Consultation & Strategy",
  "Ongoing Model Maintenance & Updates"
];

// How We Work steps
const howWeWork = [
  { icon: "Target", title: "Discovery & Planning", description: "We analyze your business needs and define the AI solution roadmap." },
  { icon: "Database", title: "Data Preparation", description: "Collect, clean, and structure data to ensure high-quality model training." },
  { icon: "Cpu", title: "Model Development", description: "Build and train custom LLMs optimized for your use case." },
  { icon: "CheckCircle", title: "Testing & Deployment", description: "Rigorous evaluation and deployment of AI models into your system." },
  { icon: "Zap", title: "Monitoring & Optimization", description: "Continuous monitoring and fine-tuning to maintain peak performance." },
];

// Routes
router.get("/features", (req, res) => res.json(features));
router.get("/services-list", (req, res) => res.json(services));
router.get("/how-we-work", (req, res) => res.json(howWeWork));

export default router;
