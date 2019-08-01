const Sequelize = require('sequelize');
const sequelize = new Sequelize('reviews', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  // logging: false
});

class Review extends Sequelize.Model{};

Review.init({
  productid: Sequelize.INTEGER,
  author: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  date: Sequelize.DATEONLY,
  review: Sequelize.STRING(500),
  title: Sequelize.STRING,
  popularity: Sequelize.INTEGER
}, { sequelize, modelName: 'review' });

const getReviews = (productid) => {
  return Review.findAll({
    where: {
      productid: productid,
    },
    benchmark: true
  });
};

const postReview = (review) => {
  return Review.create(review);
};

const updateReview = (query, vote) => {
  return Review.findOne(query)
    .then((review) => Number(review.popularity))
    .then((popularity) => {
      if (vote === 'upvote') {
        popularity++;
      } else if (vote === 'downvote') {
        popularity--;
      }
      return popularity;
    })
    .then((newPopularity) => Review.update(query, {$set: {popularity: newPopularity}}, {new: true}));
};

const deleteReview = (query) => {
  return Reviews.remove(query);
};

module.exports = {
  sequelize,
  Review,
  getReviews,
  postReview,
  updateReview,
  deleteReview
};
