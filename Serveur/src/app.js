const express = require("express");
const routes = require("./routes");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cors = require('cors');

app.use(express.json()); // permet de lire les données JSON envoyées par les clients

app.use(session({
    secret: 'JK192DFKDFD582FDF41',
    name: 'session',
    resave: true,
    saveUninitialized: true,
    // Cookie Options
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours}
        httpOnly: true
    },

}));
app.use(cors({
    origin: 'http://localhost:3000', // Remplacez 3000 par le port sur lequel votre application React écoute
    credentials: true,
}));

// monte l'API sur /api
app.use('/api', routes);

// Configuration du middleware pour analyser les corps des requêtes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbURI = process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connecté à la base de données MongoDB');
    })
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB :', err);
    });


module.exports = app;