const express = require('express');
const serviciosconsul_model = require('../models/serviciosconsul.models');
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

serviciosconsul_routes_http.get("/:consulId", (req, res,) =>{
    const { consulId } = req.params;
    serviciosconsul_model
        .findById({_id: consulId})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

serviciosconsul_routes_http.put("/:consulId", (req, res) => {
    const { consulId } = req.params;
    const {nit, nombre, servicios, precio, encargado, fecha_auditoria, resultado_auditoria} = req.body;
    serviciosconsul_model
        .updateOne(
        { _id: consulId},
        { $set: {nit, nombre, servicios, precio, encargado, fecha_auditoria, resultado_auditoria}}
        )
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

serviciosconsul_routes_http.delete("/:consulId", (req, res) => {
    const {consulId} = req.params;
    serviciosconsul_model
        .deleteOne({ _id: consulId})
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

serviciosconsul_routes_http.delete("/", (req, res) => {
    const query = {encargado: { $regex: "Viviana Restrepo"} };
    serviciosconsul_model
        .deleteMany(query)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

module.exports = serviciosconsul_routes_http;