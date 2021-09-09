require("dotenv").config();

const { usersServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await usersServices.get(id ? { id } : null);
    return res.status(200).send(users);
  } catch (error) {
    return handleError(res, error);
  }
};
