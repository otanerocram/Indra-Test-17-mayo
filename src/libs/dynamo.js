const { DynamoDB } = require("aws-sdk");
const { NAVES_DYNAMO } = require("../constants/index.js");
const { translateProperties } = require("../libs/translations.js");

const dynamo = new DynamoDB.DocumentClient({
  region: "us-east-1",
});

const dynamoStarshipList = async () => {
  try {
    const result = await dynamo
      .scan({
        TableName: NAVES_DYNAMO,
      })
      .promise();

    return result.Items;
  } catch (error) {
    console.error(JSON.stringify(error));
    return { error };
  }
};

const dynamoStarshipById = async (id) => {
  if (!id) return { error: "valid id is required!" };

  try {
    const result = await dynamo
      .get({
        TableName: NAVES_DYNAMO,
        Key: { id },
      })
      .promise();

    if (!result.Item) return { code: 404 };
    return { data: result.Item };
  } catch (error) {
    console.error(JSON.stringify(error));
    return { error };
  }
};

const dynamoStarshipCreate = async (id, payload, translate = true) => {
  try {
    const itemToSave = {
      id,
      ...(translate ? translateProperties(payload) : payload),
    };

    await dynamo
      .put({
        TableName: NAVES_DYNAMO,
        Item: itemToSave,
      })
      .promise();

    return { data: itemToSave };
  } catch (error) {
    console.error(JSON.stringify(error));
    return { error };
  }
};

module.exports = {
  dynamoStarshipList,
  dynamoStarshipById,
  dynamoStarshipCreate,
};
