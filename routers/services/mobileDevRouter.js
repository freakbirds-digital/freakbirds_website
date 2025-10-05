import express from "express";

const router = express.Router();

// Sample mobile services data
const mobileServices = {
  hero: {
    title: "Transform Your Ideas Into Powerful Mobile Apps",
    subtitle:
      "We craft mobile applications that captivate users, enhance engagement, and help your business grow.",
  },
  features: [
    {
      icon: "Apple",
      title: "iOS Development",
      description:
        "We build native iOS apps with Swift, ensuring smooth performance, clean UI, and seamless user experience.",
    },
    {
      icon: "Settings",
      title: "Android Development",
      description:
        "Native Android apps developed in Kotlin/Java with Material Design for intuitive and engaging interfaces.",
    },
    {
      icon: "Code",
      title: "Cross-Platform",
      description:
        "Reach more users with apps built in React Native or Flutter, delivering consistent performance on iOS and Android.",
    },
    {
      icon: "Zap",
      title: "High Performance",
      description:
        "Optimized apps with fast load times, smooth animations, and reliable functionality for every device.",
    },
  ],
  services: [
    "Native iOS App Development",
    "Native Android App Development",
    "Cross-Platform Development",
    "App Store Optimization",
    "Push Notifications Integration",
    "In-App Purchase Implementation",
    "Social Media Integration",
    "Analytics & Crash Reporting",
    "Backend API Integration",
    "App Maintenance & Updates",
  ],
};

router.get("/", (req, res) => {
  res.json(mobileServices);
});

export default router;
