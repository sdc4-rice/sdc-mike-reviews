const faker = require('faker');
const {db, Reviews} = require('./db.js');
require('dotenv').config();

const makeReview = function () {
  return {
    productId: faker.random.number({min: Number(process.env.START_ID), max: Number(process.env.END_ID)}),
    author: faker.internet.userName(),
    rating: Math.floor(Math.random() * 5 + 1),
    date: faker.date.past(),
    popularity: Math.floor(Math.random() * 20 + 1),
    review: {
      title: faker.lorem.words(),
      review: faker.lorem.paragraphs()
    }
  };
};

const seedDB = function() {
  db.collections['reviews'].drop(() => {
    console.log('reviews db dropped');

    for (let i = 0; i < 700; i++) {

      let reviews2 = new Reviews(makeReview());
      reviews2.save((error, document, rows) => {
        if (error) {
          console.log('Document was not saved to DB');
        } else {
          console.log(`${document} was saved to DB`);
        }
      });
    }
  });
};

module.exports = {
  makeReview, seedDB
};
