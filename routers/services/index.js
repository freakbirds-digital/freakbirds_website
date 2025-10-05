import express from "express";
import webDevRouter from "./webDevRouter.js";
import mobileDevRouter from "./mobileDevRouter.js";
import ecommerceRouter from "./ecommerceRouter.js";
import bookkeepingRouter from "./bookkeepingRouter.js";
import llmRouter from "./llmRouter.js";
import brandingRouter from "./brandingRouter.js";
import stockEducationRouter from "./stockEducationRouter.js";
import immigrationRouter from "./immigrationRouter.js";

const router = express.Router();

// Register services
router.use("/web-development", webDevRouter);
router.use("/mobile-development", mobileDevRouter);
router.use("/ecommerce", ecommerceRouter);
router.use("/bookkeeping", bookkeepingRouter);
router.use("/llm-training", llmRouter);
router.use("/branding-design", brandingRouter);
router.use("/stock-education", stockEducationRouter);
router.use("/immigration-support", immigrationRouter); 

export default router;
