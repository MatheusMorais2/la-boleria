import { Router } from "express";
import { createFlavour } from "../controllers/flavourController.js";

import createFlavourSchemaValidation from "../middlewares/createFlavourSchemaValidation.js";

const flavourRouter = Router();

flavourRouter.post("/flavours", createFlavourSchemaValidation, createFlavour);

export default flavourRouter;
