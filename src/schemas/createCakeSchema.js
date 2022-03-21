import joi from "joi";

const createCakeSchema = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().greater(0).required(),
  description: joi.string().allow(""),
  image: joi.string().uri().required(),
  flavourId: joi.number().integer().greater(0).required(),
});

export default createCakeSchema;
