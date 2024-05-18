export type ResponseData = {
  data: StarshipPayload[];
  awsRequestId: string;
};

export type ResponseCreate = {
  id: string;
  message: string;
};

export type RequestError = {
  error: string;
  awsRequestId: string;
};

type StarshipPayload = {
  id?: string;
  nombre: string;
  modelo: string;
  fabricante: string;
  costo_en_creditos: string;
  longitud: string;
  velocidad_maxima_en_atmosfera: string;
  tripulacion: string;
  pasajeros: string;
  capacidad_de_carga: string;
  consumibles: string;
  clasificacion_del_hiperimpulsor: string;
  MGLT: string;
  clase_de_nave_estelar: string;
  pilotos: Array<string>;
  peliculas: Array<string>;
  creado: string;
  editado: string;
  enlace_url: string;
};
