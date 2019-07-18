const express = require('express');
const app = express();
const cors = require('cors');
const {db, Reviews} = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/reviews/:id', (req, res) => {
  const productId = req.params.id;
  Reviews.find({productId: productId})
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send('Error on our side'));
});

app.post('/reviews', (req, res) => {
  let newReview = new Reviews(req.body);
  newReview.save((error, document, rows) => {
    if (error) {
      res.status(500).send('Error on the serverside');
    } else {
      res.send(document); //responding back with document that will be added to the state for re render.
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
