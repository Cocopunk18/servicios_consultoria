const express = require('express');
const serviciosconsul_routes_access = require('./serviciosconsul.routes');
const routes = express.Router();

const app_routes_system = (app) => {
    app.use("/api/v1", routes);
    routes.use("/serviciosconsul", serviciosconsul_routes_access);
};

module.exports = app_routes_system;