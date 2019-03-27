
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

describe('Testing DB retrieval', () => {
  test('It should send back 6 records from the database', (done) => {
    request(app).get('/links').then((response) => {
      const data = response.body;
      expect(data.length).toBe(6);
      done();
    });
  });
  test('It should send back an array', (done) => {
    request(app).get('/links').then((response) => {
      const data = response.body;
      expect(Array.isArray(data)).toBe(true);
      done();
    });
  });
  test('It should contain objects that have a URL key with a link to a jpg', (done) => {
    request(app).get('/links').then((response) => {
      const obj = response.body[0];
      const str = obj.url.slice(-3)
      expect(obj.hasOwnProperty('url')).toBe(true);
      expect(str).toBe('jpg');
      done();
    });
  });
});
