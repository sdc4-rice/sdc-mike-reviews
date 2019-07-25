// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useFindAndModify: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// let reviewSchema = new mongoose.Schema({
//   productId: Number,
//   author: String,
//   rating: Number,
//   date: Date,
//   review: {
//     title: String,
//     review: String },
//   popularity: Number
// });

// let Reviews = mongoose.model('Reviews', reviewSchema);

// module.exports = {
//   db, Reviews
// };

const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/reviews');
const sequelize = new Sequelize('reviews', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

class Review extends Sequelize.Model{}

Review.init({
  productId: Sequelize.INTEGER,
  author: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  date: Sequelize.DATEONLY,
  review: Sequelize.JSON,
  popularity: Sequelize.INTEGER
}, { sequelize, modelName: 'Review' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to db!')
  })
  .catch(err => {
    console.log('Unable to connect to db:', err);
  });

module.exports = {
  sequelize,
  Review
};
