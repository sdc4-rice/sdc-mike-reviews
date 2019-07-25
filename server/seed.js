const { seedDB } = require('./seeder.js');
const { Review } = require('./db.js');

Review.sync({ force: true }).then(() => seedDB(1, 1000000)).then(() => console.log('Done seeding!'));
