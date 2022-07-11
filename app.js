const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const loginController = require("./controller/login");
const categoriaController = require("./controller/categoria");
const productoController = require("./controller/producto");
const mediodepagoController = require("./controller/mediopago");
const usuariosController = require("./controller/usuarios");

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.consoleData);
app.use(middleware.processToken);
app.use("/categoria", categoriaController);
app.use("/producto", productoController);
app.use("/mediopago", mediodepagoController);
app.use("/usuarios", usuariosController);
app.use("/login", loginController);

app.use(middleware.unknownEndpoint);
module.exports = app;