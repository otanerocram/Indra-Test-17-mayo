const { swapiStarshipById } = require("../../../libs/swapi.js");
const { formatJSONResponse } = require("../../../libs/index.js");
const { dynamoStarshipById, dynamoStarshipCreate } = require("../../../libs/dynamo.js");

const main = async (event, context) => {
  const params = event.pathParameters ? event.pathParameters : {};
  const { id } = params;
  const { awsRequestId } = context;

  if (!id) {
    return formatJSONResponse({ error: "Payload missmatch", awsRequestId }, 400);
  }

  try {
    // Primero busca por el id de la nave en Dynamo
    const dynamoItem = await dynamoStarshipById(id);

    if (dynamoItem.code && dynamoItem.code === 404) {
      // No existe en DynamoDB, buscar en SWAPI
      const response = await swapiStarshipById(id);

      // Si no existe en Swapi, no hay datos para continuar
      if (response.error) {
        return formatJSONResponse({ error: "not found in Dynamo or SWAPI", awsRequestId });
      }

      // guardar en DynamoDB
      const nave = await dynamoStarshipCreate(id, response.data);
      if (nave.error) return formatJSONResponse({ error: nave.error }, 500);

      // retornar respuesta
      return formatJSONResponse({
        data: nave.data || {},
        awsRequestId,
      });
    }

    return formatJSONResponse({
      data: dynamoItem.data,
      awsRequestId,
    });
  } catch (error) {
    console.log(error);
    return formatJSONResponse({ error: error.message }, 500);
  }
};

module.exports = {
  main,
};
