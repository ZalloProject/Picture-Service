const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mockDB = require('../mockDatabase/mockDB');

const app = express();
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.statusCode(200);
});

app.get('/links', (req, res) => {
  db.getLinks((data) => {
    res.json(data);
  });
});

app.get('/linksMockDBTest', (req, res) => {
  mockDB.getLinks((data) => {
    console.log(typeof data);
    res.json(data);
  });
});

// app.get('/populateDB', (req, res) => {
//   for (let i = 0; i < 100; i += 1) {
//     const str = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${i + 1}.jpg`;
//     mockDB.save(str, i, (result) => {
//       console.log(result);
//     });
//     console.log(i, 'THIS IS IIIIIIIII')
//   }
//   res.end();
// });

module.exports = app;
