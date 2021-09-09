const { societiesServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { id: societyId } = req.params;
    const { name } = req.body;
    let newUpdate = {};
    if (name) {
      newUpdate.name = name;
    }
    await societiesServices.update(societyId, newUpdate);
    const societieUpdate = await societiesServices.get({ id: societyId });
    return res.status(200).send(societieUpdate);
  } catch (error) {
    return handleError(res, error);
  }
};
