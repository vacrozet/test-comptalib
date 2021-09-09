const createAction = require("./create");
const deleteAction = require("./delete");
const getAction = require("./get");
const updateAction = require("./update");
const { updateDelete, updateAdd } = require("./society");

module.exports = {
  createAction,
  getAction,
  deleteAction,
  updateAction,
  updateDelete,
  updateAdd,
};
