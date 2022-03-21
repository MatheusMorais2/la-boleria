import createCakeSchema from "../schemas/createCakeSchema.js";

export function createCakeSchemaValidation(req, res, next) {
  const validation = createCakeSchema.validate(req.body);

  if (validation.error) {
    if (validation.error.details[0].path[0] === "image") {
      return res.sendStatus(422);
    }

    return res.sendStatus(400);
  }

  next();
}
