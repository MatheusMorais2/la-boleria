import createCakeSchema from "../schemas/createCakeSchema.js";

export function createCakeSchemaValidation(req, res, next) {
  const validation = createCakeSchema.validate(req.body);

  //VALIDAÇAO DA IMAGEM:
  // IF (VALIDATION.ERROR.INCLUDES('IMAGE)) RETURN RES.SENDSTATUS(422)
  //TESTAR AINDA PQ NN SEI SE VAI DAR CERTO

  if (validation.error) {
    return res.sendStatus(400);
  }

  next();
}
