import express from "express";

const router = express.Router();

// Mock Data (moved from frontend hardcoded arrays)
const features = [
  {
    icon: "Brush",
    title: "Logo Design",
    description: "Unique and memorable logo designs that capture your brand essence and values."
  },
  {
    icon: "Image",
    title: "Brand Identity",
    description: "Complete brand identity packages including color schemes, typography, and guidelines."
  },
  {
    icon: "Layout",
    title: "Marketing Materials",
    description: "Professional marketing collaterals, brochures, and promotional materials."
  },
  {
    icon: "Sparkles",
    title: "Digital Assets",
    description: "Social media graphics, web assets, and digital marketing materials."
  }
];

const services = [
  "Logo Design & Brand Identity",
  "Brand Guidelines & Style Guide",
  "Business Card & Stationery Design",
  "Brochure & Flyer Design",
  "Social Media Graphics",
  "Website Graphics & UI Elements",
  "Packaging & Label Design",
  "Banner & Poster Design",
  "Brand Strategy Consultation",
  "Brand Refresh & Redesign"
];

const howWeWork = [
  {
    title: "Discovery & Strategy",
    description: "We understand your business goals and define a clear branding roadmap.",
    icon: "Target"
  },
  {
    title: "Concept & Design",
    description: "Develop creative concepts, logos, and brand identity elements tailored to your brand.",
    icon: "Brush"
  },
  {
    title: "Review & Feedback",
    description: "Collaborate closely with you to refine designs until they match your vision.",
    icon: "CheckCircle"
  },
  {
    title: "Delivery & Launch",
    description: "Deliver final assets and guidelines for consistent brand usage.",
    icon: "ArrowRight"
  },
  {
    title: "Support & Updates",
    description: "Provide ongoing support to keep your brand fresh and relevant.",
    icon: "Zap"
  }
];

// Endpoint
router.get("/", (req, res) => {
  res.json({ features, services, howWeWork });
});

export default router;
