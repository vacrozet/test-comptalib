const { usersServices } = require("../../services");
const handleError = require("../../../../error");

module.exports = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const { firstName, lastName } = req.body;
    let newUpdate = {};
    if (firstName) {
      newUpdate.firstName = firstName;
    }
    if (lastName) {
      newUpdate.lastName = lastName;
    }
    await usersServices.update(userId, newUpdate);
    const userUpdated = await usersServices.get({ id: userId });
    return res.status(200).send(userUpdated);
  } catch (error) {
    return handleError(res, error);
  }
};
