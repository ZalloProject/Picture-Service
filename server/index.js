const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const mockDB = require('../mockDatabase/mockDB.js');

const app = express();
const db = require('../database/index.js');

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// app.get('/jsbundle', (req, res) => {
//   res.set('Content-Type', 'application/javascript');
//   res.set('Content-Encoding', 'gzip');
//   res.sendFile(path.join(__dirname, '/../client/dist/vendors.bundle.js.gz'));
// });

app.get('/links', (req, res) => {
  console.log('did I make it here?????')
  db.getLinks((data) => {
    console.log(data);
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
//     const str = `https://s3.us-east-2.amazonaws.com/webpimages/${i}_result.webp`;
//     db.save(str, i, (result) => {
//       console.log(result);
//     });
//   }
//   res.end();
// });

module.exports = app;
