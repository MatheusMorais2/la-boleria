import createClientSchema from "../schemas/createClientSchema.js";

export default function createClientSchemaValidation(req, res, next) {
  const validation = createClientSchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
