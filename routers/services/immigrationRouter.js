import express from "express";
const router = express.Router();

// Immigration Support Data
const immigrationData = {
  hero: {
    title: "Immigration Document Support",
    description: "Professional assistance with immigration paperwork, documentation processes, and application support to simplify complex immigration requirements and increase approval chances.",
    buttonText: "Get Started Today",
    image: "/uploads/immigration.png" // Place your image in uploads folder
  },
  features: [
    {
      icon: "FileText",
      title: "Document Preparation",
      description: "Expert assistance with preparing and organizing all required immigration documents."
    },
    {
      icon: "Globe",
      title: "Global Coverage",
      description: "Support for immigration processes to multiple countries and visa categories."
    },
    {
      icon: "Users",
      title: "Expert Consultation",
      description: "Professional guidance from immigration specialists with years of experience."
    },
    {
      icon: "Clock",
      title: "Timely Processing",
      description: "Efficient handling of applications with regular status updates and follow-ups."
    }
  ],
  services: [
    "Document Review & Preparation",
    "Application Form Assistance",
    "Visa Category Assessment",
    "Supporting Document Collection",
    "Application Submission Support",
    "Status Tracking & Updates",
    "Interview Preparation",
    "Appeal & Reapplication Services",
    "Family Reunification Support",
    "Business Immigration Consultation"
  ],
  howWeWork: [
    {
      icon: "FileText",
      title: "Initial Consultation",
      description: "We analyze your immigration needs and guide you on the suitable visa type and process."
    },
    {
      icon: "Globe",
      title: "Document Collection",
      description: "Assist you in gathering and organizing all required documents for submission."
    },
    {
      icon: "Users",
      title: "Application Submission",
      description: "Prepare and submit the application accurately to reduce delays or errors."
    },
    {
      icon: "Clock",
      title: "Follow-up & Tracking",
      description: "Regularly track your application and provide updates until final approval."
    },
    {
      icon: "Shield",
      title: "Support & Guidance",
      description: "Offer ongoing support for interviews, appeals, or any additional requirements."
    }
  ]
};

// GET Immigration Support
router.get("/", (req, res) => {
  res.json(immigrationData);
});

export default router;
