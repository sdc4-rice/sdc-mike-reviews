const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'reviews'
});

const getAllReviews = () => {
  const query = `SELECT * from reviews;`
  return new Promise ((resolve, reject) => {
    client.execute(query, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    });
  });
};

const getReviews = (productid) => {
  const query = `SELECT * from reviews.reviews where productid=?;`
  const params = [productid];
  return new Promise ((resolve, reject) => {
    client.execute(query, params, {prepare: true}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const postReview = (review) => {
  const query = `INSERT into reviews JSON '${review}';`
  return new Promise((resolve, reject) => {
    client.execute(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
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
  return new Promise((resolve, reject) => {
    client.execute(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(err);
      }
    });
  });
};

const deleteReview = (query) => {
  Reviews.remove(query);
};

module.exports = {
  client,
  getReviews,
  postReview,
  getAllReviews
}
