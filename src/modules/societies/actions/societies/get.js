const { societiesServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { id: societyId } = req.params;
    const result = await societiesServices.get(
      societyId ? { id: societyId } : null
    );
    return res.status(200).send(result);
  } catch (error) {
    return handleError(res, error);
  }
};
