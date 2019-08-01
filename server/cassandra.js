const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'reviews'
});

const getAllReviews = () => {
  const query = `SELECT * from reviews;`
  return client.execute(query)
    .catch(err => console.log(`Error getting reviews: ${err}`));
};

const getReviews = (productid) => {
  const query = `SELECT * from reviews.reviews where productid=?;`
  const params = [productid];
  return client.execute(query, params, {prepare: true})
    .catch(err => console.log(`Error getting reviews: ${err}`));
};

const postReview = (review) => {
  const query = `INSERT into reviews JSON '${review}';`
  return client.execute(query)
    .catch(err => console.log(`Error posting review: ${err}`));
};

const updateReview = (review, vote) => {
  let popularity = Number(review.popularity);
  const author = review.author;
  if (vote === 'upvote') {
    popularity++;
  } else if (vote === 'downvote') {
    popularity--;
  }
  return popularity;
  const query = `UPDATE reviews SET popularity = ${popularity} where author=${author};`
  return client.execute(query)
    .catch(err => console.log(`Error updating review: ${err}`));
};

const deleteReview = (query) => {
  Reviews.remove(query);
};

module.exports = {
  client,
  getReviews,
  postReview,
  getAllReviews
};
