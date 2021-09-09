const societies = require("./modules/societies/routes");
const users = require("./modules/users/routes");

module.exports = [...societies, ...users];
