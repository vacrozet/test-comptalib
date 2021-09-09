const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const packageJson = require("../../package.json");
const definitions = require("./definitions");

const {
  users: { users, usersParams, usersAddSocieties, usersDeleteSocieties },
  societies: {
    societies,
    societiesParams,
    societiesAddUsers,
    societiesDeleteUsers,
  },
} = require("./routes");

const options = {
  swaggerDefinition: {
    info: {
      title: "API Test Comptalib",
      version: packageJson.version,
      description: "Documentation API Test Comptalib",
    },
    schemes: ["http"],
    host: `localhost:${process.env.PORT}`,
    tags: [
      {
        name: "Societies",
        description: "Societies",
        externalDocs: {
          description: "Societies",
        },
      },
      {
        name: "Users",
        description: "Users",
        externalDocs: {
          description: "Users",
        },
      },
    ],
    paths: {
      "/users": users,
      "/users/{id}": usersParams,
      "/users/addsocieties": usersAddSocieties,
      "/users/deletesocieties": usersDeleteSocieties,
      "/societies": societies,
      "/societies/{id}": societiesParams,
      "/societies/addusers": societiesAddUsers,
      "/societies/deleteusers": societiesDeleteUsers,
    },
    definitions,
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ["./route/index.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));
};
