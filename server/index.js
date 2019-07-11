const express = require('express');
const app = express();
const port = 3002;
const {db, Reviews} = require('./db');
const bodyParser = require('body-parser');
<<<<<<< HEAD
=======

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
>>>>>>> 41095ee1ef2068a38dc555b2ce4122cf6ae9796d

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/reviews', (req, res) => {
  Reviews.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send('Error on our side'));
});

app.post('/reviews', (req, res) => {
  var newReview = new Reviews(req.body);
  newReview.save((error, document, rows) => {
    if (error) {
      res.status(500).send('Error on the serverside');
    } else {
      res.send(document); //responding back with document that will be added to the state for re render.
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
