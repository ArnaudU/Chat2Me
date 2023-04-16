const app = require("./app");

const PORT = process.env.PORT || 8000; // définit le port du serveur

app.listen(PORT, () => {
    console.log(`Serveur en ecoute sur le port ${PORT}`);
});