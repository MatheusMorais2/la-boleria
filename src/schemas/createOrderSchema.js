import Joi from "joi";

const createOrderSchema = Joi.object({
  clientId: Joi.number().integer().greater(0).required(),
  cakeId: Joi.number().integer().greater(0).required(),
  quantity: Joi.number().integer().greater(0).less(5).required(),
  totalPrice: Joi.number().min(0).required(),
});

export default createOrderSchema;
