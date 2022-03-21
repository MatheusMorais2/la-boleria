import { Router } from "express";
import {
  createOrder,
  getOrders,
  getSpecificOrder,
  updateDelivery,
} from "../controllers/orderController.js";

import createOrderSchemaValidation from "../middlewares/createOrderSchemaValidation.js";
import updateDeliverySchemaValidation from "../middlewares/updatedeliverySchemaValidation.js";

const orderRouter = Router();

orderRouter.post("/orders", createOrderSchemaValidation, createOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:id", getSpecificOrder);
orderRouter.patch(
  "/orders/:id",
  updateDeliverySchemaValidation,
  updateDelivery
);

export default orderRouter;
