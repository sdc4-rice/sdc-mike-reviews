require(`dotenv`).config();
const faker = require(`faker`);
const currentDB = process.env.DB;
const { sequelize } = require(`./${currentDB}.js`);
const db = require(`./${currentDB}.js`);
const fs = require(`fs`);
const filename = process.env.CSV_FILENAME;
const path = require('path');

// Create CSV
const writer = fs.createWriteStream(`${filename}.csv`);
async function makeData(stream){
  console.time('CSV + seed')
  stream.write('productid,author,rating,date,popularity,review,title\n');
  let i = 10000000;
  await write();
  stream.on('finish', () => console.timeEnd('data'));
  async function write() {
    let ok = true;
    do {
      i--;
      const productid = faker.random.number({min: Number(process.env.START_ID), max: Number(process.env.END_ID)});
      const author = faker.internet.userName();
      const rating = Math.floor(Math.random() * 5 + 1);
      const date = faker.date.past().toJSON().slice(0, 10);
      const popularity = Math.floor(Math.random() * 20 + 1);
      const review = faker.lorem.paragraph();
      const title = faker.lorem.words();
      const data = `${productid},${author},${rating},${date},${popularity},${review},${title}\n`;
      if (i === 0) {
        await writer.write(data.trim());
      } else {
        ok = await writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // return a promise that will call write
      return new Promise((resolve, reject) => writer.once('drain', () => resolve(write())));
    }
    if (i === 0) {
      return Promise.resolve(true);
    }
  }
}

// Drop/create table

async function dropCassandraTable() {
  const query = `drop table reviews;`
  await db.client.execute(query)
    .then(() => console.log(`Cassandra reviews table dropped!`))
    .catch(err => console.log(`Error dropping Cassandra table: ${err}`))
};

async function createCassandraTable() {
  const createTable = `
    CREATE TABLE reviews (
      productid int,
      author text,
      rating smallint,
      date date,
      title text,
      review text,
      popularity int,
      PRIMARY KEY (productid, author)
    );
  `
  await db.client.execute(createTable)
    .then(() => console.log(`Created Cassandra table!`))
    .catch(err => console.log(`Error creating table in Cassandra: ${err}`))
}

// Drop Postgres table and create

async function dropPostgres() {
  await db.sequelize.authenticate()
    .then(async () => {
      await db.sequelize.sync({ force: true });
      console.log(`Dropped Postgres DB!`);
    })
    .catch((err) => console.log(`Error dropping Postgres table: ${err}`));
}

// Seeding

async function seedCassandra() {
  const query = `COPY reviews(productid, author, rating, date, popularity, review, title) FROM '/Users/mchung/HR/SDC/Napoleon-Service/test.csv' WITH header=true AND delimiter=',';`
  await db.client.execute(query)
    .then(() => console.log(`Cassandra's done seeding!`))
    .catch(err => console.log(`Error seeding Cassandra: ${err}`));
};

async function seedPostgres() {
  console.time('Seed');
  const query = `COPY reviews(productid, author, rating, date, popularity, review, title) FROM '${path.join(__dirname, '../')}${filename}.csv' WITH (FORMAT csv, HEADER true);`
  await db.sequelize.query(query)
    .then(async () => {
      await console.log(`Postgres is done seeding!`)
      await console.timeEnd('Seed')
      await console.timeEnd('CSV + seed')
    })
    .catch(err => console.log(`Error seeding Postgres: ${err}`));
};

// Create index
async function createIndex() {
  const query = `CREATE INDEX idx_productid ON reviews(productid);`
  console.time('Indexing');
  await db.sequelize.query(query)
    .then(async () => await console.timeEnd('Indexing'))
    .catch(err => console.log(`Error indexing: ${err}`))
};

// Create CSV, drop/create table, seed db
makeData(writer)
  .then(async() => {
    if(currentDB === 'postgres') {
      return await dropPostgres();
    } else if (currentDB === 'cassandra') {
      return await dropCassandraTable();
    }
  })
  .then(async() => {
    if (currentDB === 'postgres') {
      return await seedPostgres();
    } else if (currentDB === 'cassandra') {
      return await seedCassandra();
    }
  })
  .then(async() => return await createIndex())
  .catch(err => console.log(`Error seeding: ${err}`));
