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
    console.log(data, 'THIS IS THE PHOTO DATA');
    res.json(data);
  });
});

app.get('/linksMockDBTest', (req, res) => {
  mockDB.getLinks((data) => {
    res.json(data);
  });
});

module.exports = app;
