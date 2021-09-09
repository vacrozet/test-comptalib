const usersRoutes = require("express").Router();

const {
  usersAction: {
    createAction,
    deleteAction,
    getAction,
    updateAction,
    updateDelete,
    updateAdd,
  },
} = require("../actions");

usersRoutes.put("/addsocieties", updateAdd);
usersRoutes.put("/deletesocieties", updateDelete);
usersRoutes.post("/", createAction);
usersRoutes.get("/", getAction);
usersRoutes.get("/:id", getAction);
usersRoutes.put("/:id", updateAction);
usersRoutes.delete("/:id", deleteAction);

module.exports = usersRoutes;
