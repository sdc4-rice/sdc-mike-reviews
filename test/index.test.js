const request = require('supertest');
const { seedDB, makeReview } = require('../server/seeder.js');

describe('GET /reviews', () => {

  test('Responds with json', (done) => {
    request('http://localhost:3002')
      .get('/reviews')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('Responds with array of objects', (done) => {
    request('http://localhost:3002')
      .get('/reviews')
      .expect(200)
      .then((result) => {
        expect(Array.isArray(result.body)).toBe(true);
        expect(typeof result.body[0]).toBe('object');
        done();
      });
  });
});

describe('POST /reviews', () => {

  test('Post responds with updated review', (done) => {
    let review = makeReview();
    request('http://localhost:3002')
      .post('/reviews')
      .send(review)
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body.author).toEqual(review.author);
        expect(response.body.rating).toEqual(review.rating);
        expect(response.body.popularity).toEqual(review.popularity);
        expect(response.body.review).toEqual(review.review);
        done();
      });
  });
});