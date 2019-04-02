const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mockDB = require('../mockDatabase/mockDB.js');

const app = express();
const db = require('../database/index.js');

require('dotenv').config();

app.use(cors());
// app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/jsBundle', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/bundle.js'));
});

app.get('/style', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/src/style.css'));
});

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
//   for (let i = 0; i < 20; i += 1) {
//     const str = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${i + 1}.jpg`;
//     mockDB.save(str, i, (result) => {
//       console.log(result);
//     });
//   }
//   res.end();
// });

module.exports = app;
