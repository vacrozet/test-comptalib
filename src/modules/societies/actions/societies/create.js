require("dotenv").config();

const { societiesServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { name, userIds = [] } = req.body;
    if (!name || !Array.isArray(userIds)) {
      return res.status(400).send("Data not formatted");
    }
    const result = await societiesServices.create({ name, userIds });
    return res.status(201).send(result);
  } catch (error) {
    return handleError(res, error);
  }
};
