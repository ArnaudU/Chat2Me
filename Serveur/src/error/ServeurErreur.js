function serveurError(res) {
    res.status(500).json({ error: "Erreur avec le serveur" })
}

module.exports = serveurError;