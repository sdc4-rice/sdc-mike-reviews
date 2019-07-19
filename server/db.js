const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useFindAndModify: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

let reviewSchema = new mongoose.Schema({
  productId: Number,
  author: String,
  rating: Number,
  date: Date,
  review: {
    title: String,
    review: String },
  popularity: Number
});

let Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = {
  db, Reviews
};
