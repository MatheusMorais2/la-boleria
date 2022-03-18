import { Router } from "express";

import { createCakeSchemaValidation } from "../middlewares/createCakeSchemaValidation.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", createCakeSchemaValidation, createCake);

export default cakesRouter;
