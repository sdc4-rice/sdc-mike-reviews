const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to DB'));

let reviewSchema = new mongoose.Schema({
  Author: String,
  Rating: Number,
  Date: String,
  Review: {
    Tittle: String,
    Review: String },
  Popularity: Number
});

let Review = mongoose.model('Review', reviewSchema);

module.exports = {
  db: db,
  Review: Review
};