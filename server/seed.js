// NEED TO CORRECT
const { seedDB } = require('./seeder.js');
require('dotenv').config();
const currentDB = process.env.DB;
// NEED TO CORRECT
const { Review } = require(`./${currentDB}.js`);

Review.sync({ force: true })
  .then(() => {
    seedDB(1, 10000000);
  })
  .then(() => {
    console.log('Done seeding!');
  });
