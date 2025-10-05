import express from "express";
const router = express.Router();

const footerData = {
  email: "Hello@freakbirds.com",
  phone: "91+ 9952491705",
  address: "Global services, India",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61578345685002",
    twitter: "#",
    linkedin: "#",
    instagram: "https://www.instagram.com/freakbirds_digital/"
  },
  services: [
    { name: "Website Development", link: "/services/web-development" },
    { name: "Mobile App Development", link: "/services/mobile-development" },
    { name: "E-commerce Development", link: "/services/ecommerce" },
    { name: "Bookkeeping & CA Support", link: "/services/bookkeeping" },
    { name: "LLM Training", link: "/services/llm-training" },
    { name: "Branding & Design", link: "/services/branding" },
  ],
  quickLinks: [
    { name: "About Us", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "All Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Privacy Policy", link: "#" },
    { name: "Terms of Service", link: "#" },
  ],
  copyright: "© 2025 Freakbirds Digital. All rights reserved.",
  designer: "Designed & Developed with ❤️ by Freakbirds Digital"
};

router.get("/", (req, res) => {
  res.json(footerData);
});

export default router;
