import express from "express";
const router = express.Router();

const bookkeepingData = {
  hero: {
    title: "Bookkeeping & CA Support",
    subtitle: "Professional accounting services and chartered accountant support to keep your finances organized, compliant, and optimized for growth."
  },
  features: [
    { icon: "FileText", title: "Financial Records", description: "Accurate maintenance of all financial records, transactions, and documentation." },
    { icon: "TrendingUp", title: "Financial Analysis", description: "Monthly financial reports and analysis to help you make informed business decisions." },
    { icon: "Shield", title: "Tax Compliance", description: "Ensure compliance with tax regulations and timely filing of all required documents." },
    { icon: "Clock", title: "Timely Service", description: "Regular monthly reconciliation and prompt response to all your accounting needs." }
  ],
  services: [
    "Monthly Bookkeeping & Reconciliation",
    "Income Statement Preparation", 
    "Balance Sheet Preparation",
    "Cash Flow Statement Analysis",
    "Tax Preparation & Filing",
    "GST/VAT Return Filing",
    "Payroll Processing",
    "Accounts Payable & Receivable",
    "Financial Consulting",
    "Audit Support & Preparation"
  ],
  workSteps: [
    { icon: "Users", title: "Consultation", description: "We understand your business needs and financial goals to provide tailored solutions." },
    { icon: "Settings", title: "Setup & Integration", description: "Our team sets up accounting software and integrates it with your existing systems." },
    { icon: "FileText", title: "Monthly Bookkeeping", description: "Accurate and timely recording of all financial transactions and reconciliations." },
    { icon: "BarChart2", title: "Reporting & Analysis", description: "Detailed financial reports and insights to help you make informed decisions." },
    { icon: "FileCheck", title: "Tax Compliance", description: "We ensure timely filing and compliance with all tax regulations." },
    { icon: "Shield", title: "Continuous Support", description: "Ongoing consultation and support from certified accountants whenever needed." }
  ]
};

router.get("/", (req, res) => {
  res.json(bookkeepingData);
});

export default router;
