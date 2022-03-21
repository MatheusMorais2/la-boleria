import { Router } from "express";
import cakesRouter from "./cakesRouter.js";
import clientRouter from "./clientRouter.js";
import orderRouter from "./orderRouter.js";
import flavourRouter from "./flavourRouter.js";

const router = Router();
router.use(cakesRouter);
router.use(clientRouter);
router.use(orderRouter);
router.use(flavourRouter);

export default router;
