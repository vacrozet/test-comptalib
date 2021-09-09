require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const swaggerDoc = require("./swagger");
const logger = require("./utils/middleware/logger");
const log = require("./utils/logger");
const routes = require("./routes");
const packageJson = require("../package.json");
const db = require("./models");

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json({ limit: "1gb" }));

if (!process.env.LOGGER) {
  app.use(logger);
}
db.sequelize.sync();

swaggerDoc(app);

for (const routeObj of routes) {
  log.info(`route ${routeObj.path} is charged`);
  app.use(routeObj.path, routeObj.route);
}

app.get("/version", (_req, res) => {
  return res.status(200).json({ version: packageJson.version });
});
app.listen(port);
const liveLog = () => {
  log.info(`Mon serveur fonctionne sur http://localhost:${port}`);
  log.info(
    `Documentation Swagger disponible sur http://localhost:${port}/api-doc`
  );
};

module.exports = {
  app,
  liveLog,
};
