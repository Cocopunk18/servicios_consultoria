const express = require('express');
const serviciosconsul_model = require('../models/serviciosconsul');
const serviciosconsul_routes_http = express.Router();

serviciosconsul_routes_http.post("/", (req, res) => {
    const new_serviciosconsul = serviciosconsul_model(req.body);
    new_serviciosconsul
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

serviciosconsul_routes_http.get("/", (req, res) => {
    serviciosconsul_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}))   
});

serviciosconsul_routes_http.get("/:consulNit:", (req, res,) =>{
    const { consulNit } = req.params;
    serviciosconsul_model
        .findById({_id: consulNit})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

module.exports = serviciosconsul_routes_http;