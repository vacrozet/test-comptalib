const { usersServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { firstName, lastName, societies = [] } = req.body;
    if (!firstName || !lastName || !Array.isArray(societies)) {
      return res.status(400).send("Data not formatted");
    }
    const result = await usersServices.create({
      firstName,
      lastName,
      societies,
    });
    return res.status(201).send(result);
  } catch (error) {
    return handleError(res, error);
  }
};
