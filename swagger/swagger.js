// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "Documentation API. Reto Tecnico Indra",
    "version": "1"
  },
  "paths": {
    "/api/starships": {
      "get": {
        "summary": "Listar Naves Espaciales",
        "description": "Devuelve la lista de todos las naves espaciales que ya fueron almacenados en DynamoDB",
        "tags": [
          "Starships"
        ],
        "operationId": "listAll.get./api/starships",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Entrega un array de items dentro de la propiedad: data",
            "schema": {
              "$ref": "#/definitions/ResponseData"
            }
          }
        }
      }
    },
    "/api/starship/create": {
      "post": {
        "summary": "Crear nueva nave espacial",
        "description": "Crea una nueva nave espacial y almacena el registro en DynamoDB. El unico parametro obligatorio es: nombre. Se usara el ID en caso de tenerlo en el payload, caso contratio, se almacenara usando el Amazon Web Service Request ID",
        "tags": [
          "Starships"
        ],
        "operationId": "create.post./api/starship/create",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/StarshipPayload"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "La nueva nave ha sido creada correctamente",
            "schema": {
              "$ref": "#/definitions/ResponseCreate"
            }
          },
          "400": {
            "description": "El item a almacenar no es correcto o faltan datos",
            "schema": {
              "$ref": "#/definitions/RequestError"
            }
          },
          "500": {
            "description": "Error creando el registro",
            "schema": {
              "$ref": "#/definitions/RequestError"
            }
          }
        }
      }
    },
    "/api/starship/{id}": {
      "get": {
        "summary": "Busca una nave por su ID",
        "description": "Busca una nave por el ID. En caso de no encontrararla en la base de datos de DynamoDB, la buscara en StarWars API (SWAPI), hara la traduccion de los parametros y almacenara el item en DynamoDB de modo que en la siguiente consulta entregue el registro almacenado",
        "tags": [
          "Starships"
        ],
        "operationId": "searchById.get./api/starship/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Item encontrado",
            "schema": {
              "$ref": "#/definitions/ResponseData"
            }
          },
          "400": {
            "description": "El Id no es valido",
            "schema": {
              "$ref": "#/definitions/RequestError"
            }
          },
          "500": {
            "description": "Error interno al buscar id",
            "schema": {
              "$ref": "#/definitions/RequestError"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "ResponseData": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/definitions/StarshipPayload",
            "title": "ResponseData.data.[]"
          },
          "title": "ResponseData.data",
          "type": "array"
        },
        "awsRequestId": {
          "title": "ResponseData.awsRequestId",
          "type": "string"
        }
      },
      "required": [
        "data",
        "awsRequestId"
      ],
      "additionalProperties": false,
      "title": "ResponseData",
      "type": "object"
    },
    "ResponseCreate": {
      "properties": {
        "id": {
          "title": "ResponseCreate.id",
          "type": "string"
        },
        "message": {
          "title": "ResponseCreate.message",
          "type": "string"
        }
      },
      "required": [
        "id",
        "message"
      ],
      "additionalProperties": false,
      "title": "ResponseCreate",
      "type": "object"
    },
    "RequestError": {
      "properties": {
        "error": {
          "title": "RequestError.error",
          "type": "string"
        },
        "awsRequestId": {
          "title": "RequestError.awsRequestId",
          "type": "string"
        }
      },
      "required": [
        "error",
        "awsRequestId"
      ],
      "additionalProperties": false,
      "title": "RequestError",
      "type": "object"
    },
    "StarshipPayload": {
      "properties": {
        "id": {
          "title": "StarshipPayload.id",
          "type": "string"
        },
        "nombre": {
          "title": "StarshipPayload.nombre",
          "type": "string"
        },
        "modelo": {
          "title": "StarshipPayload.modelo",
          "type": "string"
        },
        "fabricante": {
          "title": "StarshipPayload.fabricante",
          "type": "string"
        },
        "costo_en_creditos": {
          "title": "StarshipPayload.costo_en_creditos",
          "type": "string"
        },
        "longitud": {
          "title": "StarshipPayload.longitud",
          "type": "string"
        },
        "velocidad_maxima_en_atmosfera": {
          "title": "StarshipPayload.velocidad_maxima_en_atmosfera",
          "type": "string"
        },
        "tripulacion": {
          "title": "StarshipPayload.tripulacion",
          "type": "string"
        },
        "pasajeros": {
          "title": "StarshipPayload.pasajeros",
          "type": "string"
        },
        "capacidad_de_carga": {
          "title": "StarshipPayload.capacidad_de_carga",
          "type": "string"
        },
        "consumibles": {
          "title": "StarshipPayload.consumibles",
          "type": "string"
        },
        "clasificacion_del_hiperimpulsor": {
          "title": "StarshipPayload.clasificacion_del_hiperimpulsor",
          "type": "string"
        },
        "MGLT": {
          "title": "StarshipPayload.MGLT",
          "type": "string"
        },
        "clase_de_nave_estelar": {
          "title": "StarshipPayload.clase_de_nave_estelar",
          "type": "string"
        },
        "pilotos": {
          "items": {
            "type": "string"
          },
          "title": "StarshipPayload.pilotos",
          "type": "array"
        },
        "peliculas": {
          "items": {
            "type": "string"
          },
          "title": "StarshipPayload.peliculas",
          "type": "array"
        },
        "creado": {
          "title": "StarshipPayload.creado",
          "type": "string"
        },
        "editado": {
          "title": "StarshipPayload.editado",
          "type": "string"
        },
        "enlace_url": {
          "title": "StarshipPayload.enlace_url",
          "type": "string"
        }
      },
      "required": [
        "nombre",
        "modelo",
        "fabricante",
        "costo_en_creditos",
        "longitud",
        "velocidad_maxima_en_atmosfera",
        "tripulacion",
        "pasajeros",
        "capacidad_de_carga",
        "consumibles",
        "clasificacion_del_hiperimpulsor",
        "MGLT",
        "clase_de_nave_estelar",
        "pilotos",
        "peliculas",
        "creado",
        "editado",
        "enlace_url"
      ],
      "additionalProperties": false,
      "title": "StarshipPayload",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev"
};