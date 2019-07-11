const faker = require('faker');
const {db, Reviews} = require('./db.js'); // commented out to stop jest from running full code

var makeReview = function () {
  return {
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

var seedDB = function() {
  db.collections['reviews'].drop(() => {
    console.log('reviews db dropped');

    for (var i = 0; i < 100; i++) {

      var reviews2 = new Reviews(makeReview());
      reviews2.save((error, document, rows) => {
        if (error) {
          console.log('Document was not saved to DB');
        } else {
          console.log(`${document} was saved to DB`); //TODO: log only total amount of saves
        }
      });
    }
  });
};

module.exports = {
  makeReview, seedDB // commmenter out to see why jest was running seedDB
};
