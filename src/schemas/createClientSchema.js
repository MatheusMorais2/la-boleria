import Joi from "joi";

const createClientSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string()
    .min(10)
    .max(11)
    .pattern(/^[0-9]+$/)
    .required(),
});

export default createClientSchema;
