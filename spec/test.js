/* eslint-disable no-undef */

const request = require('supertest');
const app = require('../server/index');

describe('Testing API', () => {
  // test('It should send back a javascript file', (done) => {
  //   request(app).get('/jsBundle').then((response) => {
  //     const jsStr = response.headers['content-type'].split(';');
  //     console.log(jsStr, 'THIS IS THE JS STRING');
  //     expect(jsStr[0] === 'application/javascript').toBe(true);
  //     done();
  //   });
  // });

  test('It should send back a css file', (done) => {
    request(app).get('/style').then((response) => {
      const cssStr = response.headers['content-type'].split(';');
      console.log(cssStr, 'THIS IS THE CSS STR');
      expect(cssStr[0] === 'text/css').toBe(true);
      done();
    });
  });
});

describe('Testing DB retrieval', () => {
  test('It should send back 9 records from the database', (done) => {
    request(app).get('/linksMockDBTest').then((response) => {
      const data = response.body;
      expect(data.length).toBe(9);
      done();
    });
  });
  test('It should send back an array', (done) => {
    request(app).get('/linksMockDBTest').then((response) => {
      const data = response.body;
      expect(Array.isArray(data)).toBe(true);
      done();
    });
  });
  test('It should contain objects that have a URL key with a link to a jpg', (done) => {
    request(app).get('/linksMockDBTest').then((response) => {
      const obj = response.body[0];
      const str = obj.url.slice(-3);
      expect(typeof obj.url).toBe('string');
      expect(str).toBe('jpg');
      done();
    });
  });
});
