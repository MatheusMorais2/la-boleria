import updateDeliverySchema from "../schemas/updateDeliverySchema.js";

export default function updateDeliverySchemaValidation(req, res, next) {
  console.log(req.params);
  const validation = updateDeliverySchema.validate(req.params);

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
