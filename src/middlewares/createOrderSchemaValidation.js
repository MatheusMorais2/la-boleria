import createOrderSchema from "../schemas/createOrderSchema.js";

export default function createOrderSchemaValidation(req, res, next) {
  const validation = createOrderSchema.validate(req.body);

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
