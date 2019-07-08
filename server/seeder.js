const faker = require('faker');
const {db, Reviews} = require('./db.js');

// drop database
db.collections['reviews'].drop(() => {
  console.log('reviews db dropped');

  for (var i = 0; i < 100; i++) {
    var author = faker.internet.userName();
    var rating = Math.floor(Math.random() * 5 + 1);
    var date = faker.date.past();
    var text = {
      title: faker.lorem.words(),
      review: faker.lorem.paragraphs()
    };

    var popularity = Math.floor(Math.random() * 20 + 1);
    var review = {
      author: author,
      rating: rating,
      date: date,
      popularity: popularity,
      review: {
        title: text.title,
        review: text.review
      }
    };
    var reviews2 = new Reviews(review);
    reviews2.save((error, document, rows) => {
      if (error) {
        console.log('Document was not saved to DB');
      } else {
        console.log(`${document} was saved to DB`);
      }
    });
  }
});
