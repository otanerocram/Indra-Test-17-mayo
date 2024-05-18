const { dynamoStarshipCreate } = require("../../../libs/dynamo.js");
const { formatJSONResponse } = require("../../../libs/index.js");

const createPayloadWithDefaults = (params) => {
  const defaults = {
    nombre: "",
    modelo: "",
    fabricante: "",
    costo_en_creditos: "",
    longitud: "",
    velocidad_maxima_en_atmosfera: "",
    tripulacion: "",
    pasajeros: "",
    capacidad_de_carga: "",
    consumibles: "",
    clasificacion_del_hiperimpulsor: "",
    MGLT: "",
    clase_de_nave_estelar: "",
    pilotos: [],
    peliculas: [],
    creado: "",
    editado: "",
    enlace_url: "",
  };

  return {
    ...defaults,
    ...params,
  };
};

const main = async (event, context) => {
  const { awsRequestId } = context;
  const payload = event?.body ? JSON.parse(event.body) : {};

  if (!payload || !payload.nombre) {
    return formatJSONResponse(
      {
        error: "Payload missmatch",
        awsRequestId,
      },
      400
    );
  }

  console.log("create pass...");

  try {
    const itemId = payload.id ? payload.id : awsRequestId;
    const starshipItem = {
      id: itemId,
      ...createPayloadWithDefaults(payload),
    };

    const dynamoItem = await dynamoStarshipCreate(itemId, starshipItem, false);

    if (!dynamoItem.data) {
      return formatJSONResponse(
        {
          error: "Error creating starship",
          awsRequestId,
        },
        500
      );
    }

    return formatJSONResponse({
      id: itemId,
      // data: dynamoItem.data,
      message: "stored!",
    });
  } catch (error) {
    console.error(error);
    return { error };
  }
};

module.exports = {
  main,
};
