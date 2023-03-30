const express = require("express");
const api = require("./api");
const mongoose = require('mongoose')
const app = express();

app.use(express.json()); // permet de lire les données JSON envoyées par les clients

app.use("/", api); // monte l'API sur /api

const dbURI = process.env.DATABASE_URI || 'mongodb://localhost:27017/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connecté à la base de données MongoDB');
    })
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB :', err);
    });


module.exports = app;