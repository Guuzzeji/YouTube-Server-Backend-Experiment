const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const api = require('./routes/api');
const createCoreServer = require('./coreServer').createCoreServer;

app.use("/API", api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./testing/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

createCoreServer()

