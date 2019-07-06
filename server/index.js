const express = require('express');
const app = express();
const port = 3002;
const {db, Review} = require('./db');

app.get('/', (req, res) => res.send('YUP'));

app.listen(port, () => console.log(`Listening on port ${port}`));