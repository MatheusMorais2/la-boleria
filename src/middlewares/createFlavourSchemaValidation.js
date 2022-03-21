import createFlavourSchema from "../schemas/createFlavourSchema.js";

export default function createFlavourSchemaValidation(req, res, next) {
  const validation = createFlavourSchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
