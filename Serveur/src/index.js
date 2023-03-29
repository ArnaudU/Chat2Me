const express = require("express")
const app = express()
const PORT = 8000

// body parser for json
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// routes
const routes = require("./routes.js");
app.use("/", routes);

// server
app.listen(PORT, () => {
    console.log('Server listening on port %d', PORT);
});