const MongoClient = require('mongodb');
const { makeReview } = require('../server/seeder.js');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
    db = await connection.db(global.reviews)
  });

  afterAll (async () => {
    await connection.close();
  });

  test('should insert a doc into collection', async () => {
    const reviews = db.collection('reviews');
    const mockReview = makeReview();
    await reviews.insertOne(mockReview);
    const insertedReview = await reviews.findOne(mockReview);
    expect(insertedReview).toEqual(mockReview);
  })
})