import express from "express";

const router = express.Router();

// Sample Services Data
const services = [
  {
    icon: "Globe",
    title: "Website Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    link: "/services/web-development",
    priority: true
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    link: "/services/mobile-development",
    priority: true
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Development",
    description: "Complete e-commerce solutions with payment integration and inventory management.",
    features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"],
    link: "/services/ecommerce",
    priority: true
  },
  {
    icon: "Calculator",
    title: "Bookkeeping & CA Support",
    description: "Professional accounting services and chartered accountant support for your business.",
    features: ["Financial Records", "Tax Preparation", "Compliance", "Consultation"],
    link: "/services/bookkeeping"
  },
  {
    icon: "Brain",
    title: "LLM Training & Development",
    description: "Custom AI language model training and development for specialized business needs.",
    features: ["Custom Models", "Training Data", "API Integration", "Deployment"],
    link: "/services/llm-training"
  },
  {
    icon: "Palette",
    title: "Branding & Graphic Design",
    description: "Complete brand identity and graphic design services to elevate your business.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
    link: "/services/branding"
  },
  {
    icon: "GraduationCap",
    title: "Stock Market Education",
    description: "Comprehensive education and training programs for stock market investment.",
    features: ["Trading Strategies", "Market Analysis", "Risk Management", "Portfolio Building"],
    link: "/services/stock-education"
  },
  {
    icon: "FileText",
    title: "Immigration Document Support",
    description: "Professional assistance with immigration paperwork and documentation processes.",
    features: ["Document Preparation", "Application Support", "Compliance Check", "Consultation"],
    link: "/services/immigration"
  }
];

// Sample Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
    text: "Freakbirds Digital transformed our online presence completely. Their website development team delivered exactly what we needed."
  },
  {
    name: "Michael Chen",
    company: "E-commerce Solutions",
    rating: 5,
    text: "The mobile app they developed for us has significantly increased our customer engagement. Highly recommended!"
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    rating: 5,
    text: "Outstanding branding work! They captured our vision perfectly and delivered a complete brand identity package."
  }
];

// GET /api/home/services
router.get("/services", (req, res) => {
  res.json(services);
});

// GET /api/home/testimonials
router.get("/testimonials", (req, res) => {
  res.json(testimonials);
});

export default router;
