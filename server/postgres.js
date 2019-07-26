const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/reviews');
const sequelize = new Sequelize('reviews', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

class Review extends Sequelize.Model{}

Review.init({
  productid: Sequelize.INTEGER,
  author: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  date: Sequelize.DATEONLY,
  review: Sequelize.JSON,
  popularity: Sequelize.INTEGER
}, { sequelize, modelName: 'review' });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to db!')
  });

module.exports = {
  sequelize,
  Review
};
