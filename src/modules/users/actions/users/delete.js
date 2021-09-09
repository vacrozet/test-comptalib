require("dotenv").config();
const fs = require("fs");

const { usersServices } = require("../../services");

const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await usersServices.delete(id);
    return res.status(200).send();
  } catch (error) {
    return handleError(res, error);
  }
};
