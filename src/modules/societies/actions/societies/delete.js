require("dotenv").config();
const fs = require("fs");

const { societiesServices } = require("../../services");

const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await societiesServices.delete(id);
    return res.status(200).send();
  } catch (error) {
    return handleError(res, error);
  }
};
