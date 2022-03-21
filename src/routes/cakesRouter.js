import { Router } from "express";
import { createCake } from "../controllers/cakesController.js";

import { createCakeSchemaValidation } from "../middlewares/createCakeSchemaValidation.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", createCakeSchemaValidation, createCake);

export default cakesRouter;
