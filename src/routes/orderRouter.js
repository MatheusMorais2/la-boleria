import { Router } from "express";

import { createOrderSchemaValidation } from "../middlewares/createOrderSchemaValidation.js";

const orderRouter = Router();

orderRouter.post("/order", createOrderSchemaValidation, createOrder);

export default orderRouter;
