function pageError(res) {
    res.status(404).json({ error: "Page Non trouvé" })
}

module.exports = pageError;