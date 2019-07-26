const express = require('express');
const app = express();
const cors = require('cors');
const { Review } = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

// app.get('/reviews/:id', (req, res) => {
//   const productId = req.params.id;
//   Reviews.find({productId: productId})
//     .then((data) => res.send(data))
//     .catch((err) => res.status(500).send('Error on our side'));
// });

// app.post('/reviews', (req, res) => {
//   let newReview = new Reviews(req.body);
//   newReview.save((error, document, rows) => {
//     if (error) {
//       res.status(500).send('Error on the serverside');
//     } else {
//       res.send(document); //responding back with document that will be added to the state for re render.
//     }
//   });
// });

// app.put('/reviews', (req, res) => {
//   let query = {_id: req.body._id};
//   let vote = req.body.vote;

//   Reviews.findOne(query)
//     .then((review) => Number(review.popularity))
//     .then((popularity) => {
//       if (vote === 'upvote') {
//         popularity++;
//       } else if (vote === 'downvote') {
//         popularity--;
//       }
//       return popularity;
//     })
//     .then((newPopularity) => Reviews.findOneAndUpdate(query, {$set: {popularity: newPopularity}}, {new: true}))
//     .then((updatedReview) => {
//       res.send(updatedReview);
//       return updatedReview;
//     })
//     .catch(err => console.log('there was an err finding in db'));
// });

// app.delete('/delete/reviews',(req, res) => {
//   let query = {_id: req.body._id};
//   Reviews.remove(query)
//     .then(data => res.send('Successfully deleted!'))
//     .catch(err => console.log('Error deleting review:', err))
// });

app.get('/reviews/:id', (req, res) => {
  const productId = req.params.id;
  Review.findAll({
    where: {
      productId: productId
    }
  })
    .then((data) => res.status(200).send(data).end())
    .catch((err) => console.log('Error getting reviews!'))
});

app.post('/reviews', (req, res) => {
  Review.create(req.body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send('Error posting!'));
});

app.put('/reviews', (req, res) => {
  let query = {id: req.body.id};
  let vote = req.body.vote;
  Review.findOne(query)
    .then((review) => Number(review.popularity))
    .then((popularity) => {
      if (vote === 'upvote') {
        popularity++;
      } else if (vote === 'downvote') {
        popularity--;
      }
      return popularity;
    })
    .then((newPopularity) => Review.update(query, {$set: {popularity: newPopularity}}, {new: true}))
    .then((updatedReview) => {
      res.send(updatedReview);
      return updatedReview;
    })
    .catch(err => console.log('there was an err finding in db'));
});

app.delete('/reviews/:id', (req, res) => {
  let id = req.params.id;
  Review.destroy({
    where: {
      id: id
    }
  })
    .then(data => res.sendStatus(200).send(data))
    .catch(err => console.log('Error deleting: ', err))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
