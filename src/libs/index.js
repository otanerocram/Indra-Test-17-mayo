const formatJSONResponse = (response, statusCode = 200) => {
  return {
    statusCode,
    body: JSON.stringify(response),
  };
};

module.exports = {
  formatJSONResponse,
};
