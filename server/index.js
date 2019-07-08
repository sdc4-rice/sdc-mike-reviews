const express = require('express');
const app = express();
const port = 3002;
const {db, Reviews} = require('./db');

app.get('/', (req, res) => res.send('YUP'));

app.get('/reviews', (req, res) => {
  Reviews.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send('Error on our side.'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
