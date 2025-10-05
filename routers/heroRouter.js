import express from "express";
const router = express.Router();

// GET /api/hero
router.get("/", (req, res) => {
  const host = req.get("host");
  const protocol = req.protocol;

  const heroData = {
    heading: "Transform Your Business with Digital Excellence",
    subheading: "We build cutting-edge websites, mobile applications, and e-commerce solutions that help businesses grow online. Our professional digital marketing, branding, and software development services deliver measurable results and trusted success.",
    buttons: [
      {
        text: "Explore Services",
        link: "/services",
        icon: "ArrowRight",
        style: "bg-accent hover:bg-accent/90 text-accent-foreground"
      },
      {
        text: "View Portfolio",
        link: "/portfolio",
        icon: "Play",
        style: "border-white text-[#031273] bg-white hover:bg-white hover:text-[#031273]"
      }
    ],
    stats: [
      { label: "Projects Delivered", value: "25+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Available", value: "24/7" }
    ],
    heroImage: {
      gradientFrom: "blue-100",
      gradientTo: "accent/20",
      floatingCircles: [
        { size: "w-8 h-8", color: "bg-accent", top: "-top-4", left: "-left-4", animate: "animate-pulse" },
        { size: "w-6 h-6", color: "bg-[#031273]", bottom: "-bottom-4", right: "-right-4", animate: "animate-pulse delay-300" },
        { size: "w-4 h-4", color: "bg-accent/60", top: "top-1/2", right: "-right-2", animate: "animate-pulse delay-700" }
      ]
    }
  };

  res.json(heroData);
});

export default router;
