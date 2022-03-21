import Joi from "joi";

const createFlavourSchema = Joi.object({
  name: Joi.string().required(),
});

export default createFlavourSchema;
