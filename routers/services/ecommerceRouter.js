import express from "express";
const router = express.Router();

const ecommerceData = {
  hero: {
    title: "E-commerce Development",
    subtitle: "Build powerful online stores that convert visitors into loyal customers. Full e-commerce solutions including payment processing, inventory management, and advanced analytics."
  },
  features: [
    { icon: "CreditCard", title: "Payment Integration", description: "Secure payment gateways with support for multiple payment methods and currencies." },
    { icon: "Package", title: "Inventory Management", description: "Complete inventory tracking with automated stock alerts and management tools." },
    { icon: "BarChart3", title: "Analytics Dashboard", description: "Comprehensive analytics to track sales, customer behavior, and business metrics." },
    { icon: "Shield", title: "Security & Compliance", description: "SSL encryption, PCI compliance, and advanced security measures for safe transactions." }
  ],
  services: [
    "Custom E-commerce Website Development",
    "Shopping Cart & Checkout Optimization", 
    "Payment Gateway Integration",
    "Inventory Management System",
    "Order Management & Tracking",
    "Customer Account Management",
    "Product Catalog Management",
    "SEO & Marketing Tools",
    "Mobile Commerce Solutions",
    "Multi-vendor Marketplace Development"
  ],
  workSteps: [
    { step: "1. Discovery & Research", description: "We understand your business, target audience, and e-commerce goals to tailor the perfect solution." },
    { step: "2. Planning & Strategy", description: "We create a detailed project roadmap, UX/UI designs, and technical architecture for your platform." },
    { step: "3. Development & Integration", description: "Our team builds your online store using modern technologies with secure payment gateways, inventory management, and analytics." },
    { step: "4. Testing & Launch", description: "We thoroughly test your platform for performance, security, and user experience before going live." },
    { step: "5. Maintenance & Growth", description: "Continuous updates, optimization, and marketing support to help your e-commerce business scale." }
  ]
};

router.get("/", (req, res) => {
  res.json(ecommerceData);
});

export default router;
