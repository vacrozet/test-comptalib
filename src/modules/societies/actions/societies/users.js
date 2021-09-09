const { societiesServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = {
  updateAdd: async (req, res) => {
    try {
      const { societyId, userIds } = req.body;
      await societiesServices.updateAddSociety(societyId, userIds);
      const societies = await societiesServices.get({ id: societyId });
      return res.status(200).send(societies);
    } catch (error) {
      return handleError(res, error);
    }
  },
  updateDelete: async (req, res) => {
    try {
      const { societyId, userIds } = req.body;
      await societiesServices.updateDeleteSociety(societyId, userIds);
      const societies = await societiesServices.get({ id: societyId });
      return res.status(200).send(societies);
    } catch (error) {
      return handleError(res, error);
    }
  },
};
