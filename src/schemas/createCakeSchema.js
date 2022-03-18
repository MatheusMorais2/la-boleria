import joi from "joi";

const cakeCreationSchema = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().greater(0).required(),
  description: joi.string().optional(), // joi.string().allow('')
  image: joi.uri().required(),
  flavourId: joi.number().required(),
});

export default cakeCreationSchema;
