import express from "express";

const router = express.Router();

// Web Development service details API
router.get("/", (req, res) => {
  const data = {
    features: [
      { icon: "Code", title: "Custom Development", description: "Every business is unique — your website should be too. We build tailored solutions using modern frameworks to match your specific goals instead of forcing you into cookie-cutter templates." },
      { icon: "Smartphone", title: "Responsive Design", description: "Your audience is everywhere — desktops, tablets, and mobiles. We ensure your website delivers a seamless, consistent experience across all devices." },
      { icon: "Search", title: "SEO Optimized", description: "A beautiful website is useless if no one finds it. We follow SEO best practices so your business can rank higher on search engines and attract the right customers." },
      { icon: "Zap", title: "Fast Performance", description: "Speed matters. We optimize code, images, and hosting so your website loads quickly and keeps visitors engaged instead of bouncing away." },
      { icon: "Shield", title: "Secure & Reliable", description: "Your website is your digital storefront. We implement industry-standard security measures to protect your data and give your customers confidence." },
      { icon: "Palette", title: "Modern UI/UX", description: "A website should not just function well, it should feel great to use. We create clean, modern interfaces designed to guide users naturally and keep them coming back." }
    ],
    technologies: [
      { name: "React", icon: "Code" },
      { name: "Next.js", icon: "Globe" },
      { name: "Vue.js", icon: "Palette" },
      { name: "Angular", icon: "Database" },
      { name: "Node.js", icon: "Zap" },
      { name: "TypeScript", icon: "Shield" },
      { name: "JavaScript", icon: "Smartphone" },
      { name: "Python", icon: "Code" },
      { name: "PHP", icon: "Code" },
      { name: "Laravel", icon: "Code" },
      { name: "WordPress", icon: "Globe" },
      { name: "Shopify", icon: "Globe" }
    ],
    process: [
      { step: "1", title: "Planning", description: "We begin by understanding your business goals, target audience, and project requirements." },
      { step: "2", title: "Design", description: "Our designers craft intuitive, modern, and user-friendly UI/UX prototypes." },
      { step: "3", title: "Development", description: "Our developers bring the designs to life using the latest frameworks and technologies." },
      { step: "4", title: "Testing", description: "Every feature is tested for speed, security, and reliability before launch." },
      { step: "5", title: "Launch & Support", description: "We deploy your website and provide ongoing support for smooth performance." }
    ]
  };

  res.json(data);
});

export default router;
