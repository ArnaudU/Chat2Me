const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.post('/inscription', (req, res) => {
    console.log(req.body)
    res.send("Bien recu")
});

app.post('/connexion', (req, res) => {
    console.log(req.body)
    res.send("Bien recu")
})

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
