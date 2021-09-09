const db = require("../../../models");
const Societies = db.societies;
const Users = db.users;

module.exports = {
  create: async ({ name, userIds }) => {
    const society = await Societies.create({ name });
    const allUsers = await Users.findAll({
      where: { id: userIds },
    });
    await society.setUsers(userIds);
    return society;
  },
  get: async (value = null) => {
    const condition = value ? { ...value } : null;
    return Societies.findAll({ where: condition, include: Users });
  },
  update: async (societyId, update) => {
    const society = await Societies.update(
      { ...update },
      {
        where: { id: societyId },
      }
    );
    return society;
  },
  updateAddSociety: async (societyId, userIds) => {
    const societies = await Societies.findAll({ where: { id: societyId } });
    // Théoriquement il ne peut y avoir que 1 utilisateur dans la const "societies",
    // mais je préfère faire un map dessus, je trouve ça plus propre que faire "societies[0].add...""
    await Promise.all(societies.map((society) => society.addUsers(userIds)));
    return;
  },
  updateDeleteSociety: async (societyId, userIds) => {
    const societies = await Societies.findAll({ where: { id: societyId } });
    await Promise.all(societies.map((society) => society.removeUsers(userIds)));
    return;
  },
  delete: async (societyId) => {
    return Societies.destroy({ where: { id: societyId } });
  },
};
