function tokenError(res) {
    res.status(500).json({ error: "Erreur avec le cookie, veuillez vous reconnecter" })
}

module.exports = tokenError;