
const request = require('supertest');
const app = require('./server/index');

describe('Testing API', () => {
  test('It should respond with a 200 status from GET request', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
