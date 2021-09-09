const { usersServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = {
  updateAdd: async (req, res) => {
    try {
      const { userId, societies } = req.body;
      await usersServices.updateAddSociety(userId, societies);
      const users = await usersServices.get({ id: userId });
      return res.status(200).send(users);
    } catch (error) {
      return handleError(res, error);
    }
  },
  updateDelete: async (req, res) => {
    try {
      const { userId, societies } = req.body;
      await usersServices.updateDeleteSociety(userId, societies);
      const users = await usersServices.get({ id: userId });
      return res.status(200).send(users);
    } catch (error) {
      return handleError(res, error);
    }
  },
};
