const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const keepaliveController = require("./controller/keepalive");
const entryController = require("./controller/entry");
const loginController = require("./controller/login");
const categoriaController = require("./controller/categoria");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use(middleware.processToken);

app.use("/keepalive", keepaliveController);
app.use("/objeto", entryController);
app.use("/categoria", categoriaController);
//app.use("/login", loginController);//

app.use(middleware.unknownEndpoint);
module.exports = app;