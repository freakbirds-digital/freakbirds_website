import express from "express";
const router = express.Router();

// Core Values
const values = [
  {
    icon: "Target",
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
  },
  {
    icon: "Users",
    title: "Collaboration",
    description:
      "We work closely with our clients, treating their success as our own and building lasting partnerships.",
  },
  {
    icon: "Award",
    title: "Excellence",
    description:
      "Quality is non-negotiable. We maintain the highest standards in every project, no matter the size or complexity.",
  },
  {
    icon: "Clock",
    title: "Reliability",
    description:
      "We deliver on time, every time. Our clients trust us to meet deadlines and exceed expectations consistently.",
  },
];

// Milestones
const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description:
      "Started with a vision to provide exceptional digital solutions for businesses of all sizes.",
  },
  {
    year: "2024",
    title: "Service Expansion",
    description:
      "Expanded our services to include AI/ML solutions and comprehensive business support services.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Recognized as a leading digital solutions provider with award-winning projects.",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "Expanding our reach to serve clients worldwide with innovative digital solutions.",
  },
];

// Stats
const stats = {
  clients: 25,
  experience: 2,
  successRate: 98,
  support: "24/7",
};

// Routes
router.get("/values", (req, res) => res.json(values));
router.get("/milestones", (req, res) => res.json(milestones));
router.get("/stats", (req, res) => res.json(stats));

export default router;
