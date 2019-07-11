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

// describe('seedDB', () => {

//   var documents;

//   beforeAll(async () => {
//     await seedDB();
//     await db.Reviews.find()
//       .then((reviews) => {
//         documents = reviews;
//       });
//   });

//   test('DB should have 100 documents', () => {
//     expect(documents.length).toBe(100);
//   });

// });
