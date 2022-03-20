import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientRouter from "./clientRouter.js";
import orderRouter from "./orderRouter.js";

const router = Router();
router.use(cakesRouter);
router.use(clientRouter);
router.use(orderRouter);

export default router;
