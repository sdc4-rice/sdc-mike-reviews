const { seedDB } = require('./seeder.js');
const { Review } = require('./db.js');

Review.sync({ force: true })
  .then(() => {
    seedDB(1, 10000000);
  })
  .then(() => {
    console.log('Done seeding!');
  });
