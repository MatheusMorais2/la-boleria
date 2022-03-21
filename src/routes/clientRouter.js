import { Router } from "express";
import {
  createClient,
  getClientsOrders,
} from "../controllers/clientController.js";

import createClientSchemaValidation from "../middlewares/createClientSchemaValidation.js";

const clientRouter = Router();

clientRouter.post("/clients", createClientSchemaValidation, createClient);
clientRouter.get("/clients/:id/orders", getClientsOrders);

export default clientRouter;
