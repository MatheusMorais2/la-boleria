import { Router } from "express";

import createClientSchemaValidation from "../middlewares/createClientSchemaValidation.js";
const clientRouter = Router();

clientRouter.post("/clients", createClientSchemaValidation, createCLient);

export default clientRouter;
