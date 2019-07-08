const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to DB'));

let reviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  date: String,
  review: {
    title: String,
    review: String },
  popularity: Number
});

let Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = {
  db, Reviews
};
