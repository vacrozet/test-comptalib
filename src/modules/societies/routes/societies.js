const societiesRoutes = require("express").Router();

const {
  societiesAction: {
    createAction,
    deleteAction,
    getAction,
    updateAction,
    updateAdd,
    updateDelete,
  },
} = require("../actions");

societiesRoutes.put("/addusers", updateAdd);
societiesRoutes.put("/deleteusers", updateDelete);
societiesRoutes.post("/", createAction);
societiesRoutes.get("/", getAction);
societiesRoutes.get("/:id", getAction);
societiesRoutes.put("/:id", updateAction);
societiesRoutes.delete("/:id", deleteAction);

module.exports = societiesRoutes;
