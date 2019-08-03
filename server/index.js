require('dotenv').config();
require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const currentDB = process.env.DB;
const db = require(`./${currentDB}.js`);
const bodyParser = require('body-parser');

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

app.get('/reviews/:id', (req, res) => {
  const productid = req.params.id;
  db.getReviews(productid)
    .then((data) => res.status(200).send(data).end())
    .catch((err) => console.log('Error getting reviews: ', err))
});

app.get('/reviews', (req, res) => {
  db.getAllReviews()
    .then(data => res.send(data))
    .catch(err => console.log('Error getting reviews: ', err))
})

app.post('/reviews', (req, res) => {
  if (currentDB === 'cassandra') {
    db.postReview(JSON.stringify(req.body))
      .then((data) => res.status(200).send(data))
      .catch((err) => res.send('Error posting: ', err));
  } else if (currentDB === 'postgres') {
    const review = req.body;
    db.postReview(review)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.send('Error posting: ', err));
  }
});

app.put('/reviews', (req, res) => {
  let query = {id: req.body.id};
  let vote = req.body.vote;
  db.updateReview(query, vote)
    .then((updatedReview) => {
      res.send(updatedReview);
      return updatedReview;
    })
    .catch(err => console.log('there was an err finding in db'));
});

app.delete('/delete/reviews',(req, res) => {
  let query = {_id: req.body._id};
  db.deleteReview(query)
    .then(data => res.send('Successfully deleted!'))
    .catch(err => console.log('Error deleting review:', err))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
