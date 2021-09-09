const createAction = require("./create");
const deleteAction = require("./delete");
const getAction = require("./get");
const updateAction = require("./update");
const { updateAdd, updateDelete } = require("./users");

module.exports = {
  createAction,
  getAction,
  deleteAction,
  updateAction,
  updateAdd,
  updateDelete,
};
