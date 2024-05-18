const translations = {
  name: "nombre",
  model: "modelo",
  manufacturer: "fabricante",
  cost_in_credits: "costo_en_creditos",
  length: "longitud",
  max_atmosphering_speed: "velocidad_maxima_en_atmosfera",
  crew: "tripulacion",
  passengers: "pasajeros",
  cargo_capacity: "capacidad_de_carga",
  consumables: "consumibles",
  hyperdrive_rating: "clasificacion_del_hiperimpulsor",
  MGLT: "MGLT",
  starship_class: "clase_de_nave_estelar",
  pilots: "pilotos",
  films: "peliculas",
  created: "creado",
  edited: "editado",
  url: "enlace_url",
};

const translateProperties = (response) => {
  const translatedResponse = {};
  for (const [key, value] of Object.entries(response)) {
    const translatedKey = translations[key] || key;
    translatedResponse[translatedKey] = value;
  }
  return translatedResponse;
};

module.exports = {
  translateProperties,
  translations,
};
