function userError(res) {
    res.status(401).json({ error: "Utilisateur non trouve" })
}

module.exports = userError;