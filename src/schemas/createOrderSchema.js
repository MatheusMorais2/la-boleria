import Joi from "joi";

const createOrderSchema = Joi.object({
  clientId: Joi.number().integer().required(),
  cakeId: Joi.number().integer().required(),
  quantity: Joi.number().integer().greater(0).less(5).required(),
  totalPrice: Joi.number().required(),
});
