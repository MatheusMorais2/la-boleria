import Joi from "joi";

const updateDeliverySchema = Joi.object({
  id: Joi.number().integer().greater(0).required(),
});

export default updateDeliverySchema;
