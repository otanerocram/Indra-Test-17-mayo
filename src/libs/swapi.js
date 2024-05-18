const { default: axios } = require("axios");
const { STARSHIPS_URL } = require("../constants");

const swapiListStarships = async () => {
  try {
    const response = await axios.get(STARSHIPS_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const swapiStarshipById = async (id) => {
  try {
    const response = await axios.get(`${STARSHIPS_URL}/${id}/`);
    return { data: response?.data ? response.data : {} };
  } catch (error) {
    const err = error;
    const statusCode = err.response?.status;
    return { error: statusCode };
  }
};

module.exports = {
  swapiListStarships,
  swapiStarshipById,
};
