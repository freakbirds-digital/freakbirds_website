import express from "express";
const router = express.Router();

// Portfolio projects
const projects = [
  {
    id: 1,
    title: "TechStart E-commerce Platform",
    category: "ecommerce",
    description:
      "Complete e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/uploads/portfolio-ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "TechStart Inc.",
    year: "2024",
    rating: 5,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "HealthCare Mobile App",
    category: "mobile",
    description:
      "Cross-platform mobile application for healthcare management with appointment booking and telemedicine features.",
    image: "/uploads/portfolio-healthcare.jpg",
    technologies: ["React Native", "Firebase", "Node.js"],
    client: "HealthCare Solutions",
    year: "2024",
    rating: 5,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "ai",
    description:
      "Machine learning dashboard for business intelligence with predictive analytics and automated reporting.",
    image: "/uploads/portfolio-ai-dashboard.jpg",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    client: "Analytics Corp",
    year: "2024",
    rating: 5,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "web",
    description:
      "Modern, responsive corporate website with CMS integration and SEO optimization.",
    image: "/uploads/portfolio-corporate.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Strapi", "Vercel"],
    client: "Global Enterprises",
    year: "2023",
    rating: 5,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Restaurant Chain Branding",
    category: "branding",
    description:
      "Complete brand identity package including logo design, brand guidelines, and marketing materials.",
    image: "/uploads/portfolio-branding.jpg",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    client: "Tasty Bites",
    year: "2023",
    rating: 5,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "FinTech Web Application",
    category: "web",
    description:
      "Secure financial technology platform with real-time trading, portfolio management, and compliance features.",
    image: "/uploads/portfolio-fintech.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    client: "FinanceFlow",
    year: "2023",
    rating: 5,
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    text: "The e-commerce platform exceeded our expectations. Sales increased by 150% in the first quarter after launch.",
    rating: 5,
  },
  {
    name: "Dr. Michael Chen",
    company: "HealthCare Solutions",
    text: "The mobile app revolutionized how we connect with patients. The telemedicine feature has been a game-changer.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Analytics Corp",
    text: "The AI dashboard provides insights we never had before. It's become essential for our decision-making process.",
    rating: 5,
  },
];

router.get("/", (req, res) => {
  res.json({ projects, testimonials });
});

export default router;
