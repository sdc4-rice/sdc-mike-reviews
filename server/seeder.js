const faker = require('faker');
const {db, Reviews} = require('./db.js');

// drop database
db.collections['reviews'].drop(() => {
  console.log('reviews db dropped');

  var formatMonth = function (month) {
    if (month === '01') {
      return 'Jan';
    } else if (month === '02') {
      return 'Feb';
    } else if (month === '03') {
      return 'Mar';
    } else if (month === '04') {
      return 'Apr';
    } else if (month === '05') {
      return 'May';
    } else if (month === '06') {
      return 'Jun';
    } else if (month === '07') {
      return 'Jul';
    } else if (month === '08') {
      return 'Aug';
    } else if (month === '09') {
      return 'Sep';
    } else if (month === '10') {
      return 'Oct';
    } else if (month === '11') {
      return 'Nov';
    } else if (month === '12') {
      return 'Dec';
    }
  };

  var formatDate = function (date) {
    var month = formatMonth(date.substring(6, 8));
    var day = date.substring(9, 11);
    var year = date.substring(1, 5);
    return `${month} ${day}, ${year}`;
  };

  for (var i = 0; i < 100; i++) {
    var author = faker.internet.userName();
    var rating = Math.floor(Math.random() * 5 + 1);
    var date = faker.date.past();
    date = JSON.stringify(date);
    date = formatDate(date);

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
        tittle: text.title,
        review: text.review
      }
    };
    var reviews2 = new Reviews(review);
    reviews2.save();
  }

  console.log('seeder ran');
});