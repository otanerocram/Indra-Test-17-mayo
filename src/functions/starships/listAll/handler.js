"use strict";
const { dynamoStarshipList } = require("../../../libs/dynamo.js");
const { formatJSONResponse } = require("../../../libs/index.js");

const main = async (_, context) => {
  const { awsRequestId } = context;
  try {
    const data = await dynamoStarshipList();

    return formatJSONResponse({
      data,
      awsRequestId,
    });
  } catch (error) {
    console.log(error);
    return formatJSONResponse(
      {
        error,
        awsRequestId,
      },
      500
    );
  }
};

module.exports = {
  main,
};
