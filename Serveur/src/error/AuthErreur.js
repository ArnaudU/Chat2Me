function authError(res) {
    res.status(401).json({ error: "Vous n'etes pas connecter!" })
}

module.exports = authError;