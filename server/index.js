const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mockDB = require('../mockDatabase/mockDB.js');

const app = express();
const db = require('../database/index.js');

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/links', (req, res) => {
  db.getLinks((data) => {
    res.json(data);
  });
});

app.get('/linksMockDBTest', (req, res) => {
  mockDB.getLinks((data) => {
    res.json(data);
  });
});

// app.get('/populateDB', (req, res) => {
//   for (let i = 0; i < 100; i += 1) {
//     const str = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${i + 1}.jpg`;
//     db.save(str, i, (result) => {
//       console.log(result);
//     });
//   }
//   res.end();
// });

module.exports = app;
