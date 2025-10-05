import express from "express";

const router = express.Router();

// Dummy Data for Stock Education Page
const stockEducationData = {
  hero: {
    title: "Stock Market Education",
    description:
      "Comprehensive courses and mentorship to help you learn trading, analysis, and portfolio management. Build confidence and grow your investment skills with practical guidance.",
     image: "http://localhost:5000/uploads/stock.png",
    buttonText: "Start Your Learning Journey",
  },
  features: [
    {
      icon: "TrendingUp",
      title: "Trading Strategies",
      description:
        "Learn proven trading strategies for different market conditions and risk levels.",
    },
    {
      icon: "PieChart",
      title: "Portfolio Management",
      description:
        "Master the art of portfolio diversification and risk management techniques.",
    },
    {
      icon: "BookOpen",
      title: "Market Analysis",
      description:
        "Technical and fundamental analysis skills to make informed investment decisions.",
    },
    {
      icon: "Award",
      title: "Certification Programs",
      description:
        "Industry-recognized certification courses to advance your trading career.",
    },
  ],
  services: [
    "Stock Market Fundamentals Course",
    "Technical Analysis Training",
    "Fundamental Analysis Workshop",
    "Risk Management Strategies",
    "Portfolio Building & Diversification",
    "Options & Derivatives Trading",
    "Commodity Market Education",
    "Forex Trading Basics",
    "Investment Psychology Training",
    "Live Market Mentorship",
  ],
  howWeWork: [
    {
      title: "Learning Assessment",
      description:
        "We evaluate your current knowledge and tailor courses to fit your learning pace.",
      icon: "Target",
    },
    {
      title: "Customized Curriculum",
      description:
        "Create a structured plan combining theory, practical exercises, and live trading.",
      icon: "Cpu",
    },
    {
      title: "Interactive Training",
      description:
        "Hands-on lessons with real market scenarios, analysis tools, and case studies.",
      icon: "PieChart",
    },
    {
      title: "Mentorship & Support",
      description:
        "Ongoing guidance and Q&A sessions to ensure you apply knowledge effectively.",
      icon: "Zap",
    },
    {
      title: "Certification & Growth",
      description:
        "Complete courses with recognized certification and support for your trading career.",
      icon: "Award",
    },
  ],
};

router.get("/", (req, res) => {
  res.json(stockEducationData);
});

export default router;
