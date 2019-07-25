const { seedDB } = require('./seeder.js');
const { Review } = require('./db.js');

Review.sync({ force: true }).then(() => seedDB());
