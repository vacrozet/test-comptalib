const db = require("../../../models");
const Users = db.users;
const Societies = db.societies;

module.exports = {
  create: async ({ firstName, lastName, societies }) => {
    const user = await Users.create({ firstName, lastName });
    const allSocieties = await Societies.findAll({
      where: { id: societies },
    });
    await user.setSocieties(societies);
    return user;
  },
  get: async (value = null) => {
    const condition = value ? { ...value } : null;
    return Users.findAll({ where: condition, include: Societies });
  },
  update: async (userId, update) => {
    const user = await Users.update(
      { ...update },
      {
        where: { id: userId },
      }
    );
    return user;
  },
  updateAddSociety: async (userId, societies) => {
    const users = await Users.findAll({ where: { id: userId } });
    // Théoriquement il ne peut y avoir que 1 utilisateur dans la const "users",
    // mais je préfère faire un map dessus, je trouve ça plus propre que faire "users[0].add ...""
    await Promise.all(users.map((user) => user.addSocieties(societies)));
    return;
  },
  updateDeleteSociety: async (userId, societies) => {
    const users = await Users.findAll({ where: { id: userId } });
    await Promise.all(users.map((user) => user.removeSocieties(societies)));
    return;
  },
  delete: async (userId) => {
    return Users.destroy({ where: { id: userId } });
  },
};
