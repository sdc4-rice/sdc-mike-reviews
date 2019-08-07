const faker = require('faker');
const { Review } = require('./postgres.js');
require('dotenv').config();
const db = require('./postgres.js');

const makeReview = function () {
  return {
    productid: faker.random.number({min: Number(process.env.START_ID), max: Number(process.env.END_ID)}),
    author: faker.internet.userName(),
    rating: Math.floor(Math.random() * 5 + 1),
    date: faker.date.past(),
    popularity: Math.floor(Math.random() * 20 + 1),
    title: faker.lorem.words(),
    review: faker.lorem.paragraph()
  };
};

async function seedDB(start, end) {
  console.time('SeedTime');
  var reviews = [];
  for (let i = start; i <= end; i++) {
    reviews.push(makeReview());
    if (i % 25000 === 0) {
      await Review.bulkCreate(reviews);
      reviews = [];
    }
  }
  await Review.bulkCreate(reviews);
  console.timeEnd('SeedTime');
};

db.sequelize.authenticate()
  .then(() => db.sequelize.sync({ force: true }))
  .then(() => seedDB(1, 100))
  .catch(err => console.log(`Error seeding: ${err}`));

