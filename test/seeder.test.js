const {makeReview, seedDB} = require ('../server/seeder.js');
const { db, Reviews } = require('../server/db.js');

describe('Review Maker', () => {
  var review = makeReview();

  test('reviews contain desired keys', () => {
    expect(review).toHaveProperty('author');
    expect(review).toHaveProperty('rating');
    expect(review).toHaveProperty('date');
    expect(review).toHaveProperty('popularity');
    expect(review).toHaveProperty('review.title');
    expect(review).toHaveProperty('review.review');
  });

  test('review properties contain correct data type', () => {
    expect(review).toEqual(expect.objectContaining({
      author: expect.any(String),
      rating: expect.any(Number),
      date: expect.any(Date),
      popularity: expect.any(Number),
      review: {
        title: expect.any(String),
        review: expect.any(String)
      }
    }));
  });

});

describe('seedDB', () => {

  beforeAll(async () => {
    await seedDB();
  });

  test('DB should have 100 documents', () => {
    db.collection('reviews').find()
      .then(result => expect(result.length).toEqual(100));
  });
});
