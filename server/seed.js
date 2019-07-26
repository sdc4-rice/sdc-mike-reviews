const { seedDB } = require('./seeder.js');
const { Review } = require('./postgres.js');

Review.sync({ force: true })
  .then(() => {
    seedDB(1, 10000000);
  })
  .then(() => {
    console.log('Done seeding!');
  });
