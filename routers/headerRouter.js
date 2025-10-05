import express from "express";
const router = express.Router();

// Example site/header data
const siteData = {
  title: "Freakbirds Digital",
    logoUrl: "http://localhost:5000/uploads/freakbirds-logo.png", // make sure this file exists
  navItems: [
    { name: "Smart Solutions", path: "/" },
    { name: "What We Do", path: "/services" },
    { name: "Who We Are", path: "/about" },
    { name: "Our Work", path: "/portfolio" },
    { name: "Work With Us", path: "/contact" },
  ],
  cta: {
    text: "Get Quote",
    link: "/contact"
  }
};

// GET /api/site
router.get("/", (req, res) => {
  res.json(siteData);
});

export default router;
