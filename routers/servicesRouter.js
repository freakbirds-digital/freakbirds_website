import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    services: [
      {
        icon: "Globe",
        title: "Website Development",
        description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
        features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX", "CMS Integration", "E-commerce Ready"],
        link: "/services/web-development"
      },
      {
        icon: "Smartphone",
        title: "Mobile App Development", 
        description: "Native and cross-platform mobile applications for iOS and Android devices with stunning user interfaces.",
        features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications", "Offline Support", "Cloud Integration"],
        link: "/services/mobile-development"
      },
      {
        icon: "ShoppingCart",
        title: "E-commerce Development",
        description: "Complete e-commerce solutions with payment integration, inventory management, and analytics dashboard.",
        features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics", "Multi-vendor Support", "Mobile Commerce"],
        link: "/services/ecommerce"
      },
      {
        icon: "Calculator",
        title: "Bookkeeping & CA Support",
        description: "Professional accounting services and chartered accountant support to keep your finances organized and compliant.",
        features: ["Financial Records", "Tax Preparation", "Compliance", "Consultation", "Monthly Reports", "Audit Support"],
        link: "/services/bookkeeping"
      },
      {
        icon: "Brain",
        title: "LLM Training & Development",
        description: "Custom AI language model training and development for specialized business needs and applications.",
        features: ["Custom Models", "Training Data", "API Integration", "Deployment", "Fine-tuning", "Performance Optimization"],
        link: "/services/llm-training"
      },
      {
        icon: "Palette",
        title: "Branding & Graphic Design",
        description: "Complete brand identity and graphic design services to create a memorable and professional brand presence.",
        features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets", "Print Design", "Social Media Graphics"],
        link: "/services/branding"
      },
      {
        icon: "GraduationCap",
        title: "Stock Market Education",
        description: "Comprehensive education and training programs for stock market investment and trading strategies.",
        features: ["Trading Strategies", "Market Analysis", "Risk Management", "Portfolio Building", "Technical Analysis", "Fundamental Analysis"],
        link: "/services/stock-education"
      },
      {
        icon: "FileText",
        title: "Immigration Document Support",
        description: "Professional assistance with immigration paperwork, documentation processes, and application support.",
        features: ["Document Preparation", "Application Support", "Compliance Check", "Consultation", "Status Tracking", "Expert Guidance"],
        link: "/services/immigration"
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We start by understanding your business goals, target audience, and project requirements."
      },
      {
        step: "02",
        title: "Design & Development",
        description: "Our team creates stunning designs and develops robust solutions using cutting-edge technologies."
      },
      {
        step: "03",
        title: "Testing & Launch",
        description: "Thorough testing ensures quality before launch, followed by ongoing support and maintenance."
      }
    ]
  });
});

export default router;
