const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mockDB = require('../mockDatabase/mockDB.js');

const app = express();
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.statusCode(200);
});

app.get('/links', (req, res) => {
  // const promises = [];
  // for (let i = 0; i < 9; i += 1) {
  //   const promise = new Promise((resolve, reject) => {
  //     db.getLinks((data) => {
  //       resolve(data);
  //     });
  //   });
  //   promises.push(promise);
  // }
  // Promise.all(promises).then(data => console.log(data));
  const returnArr = [];
  db.getLinks((data) => {
    for (let i = 0; i < 9; i += 1) {
      const index = Math.floor(Math.random() * data.length);
      returnArr.push(data[index]);
      data.splice(index, 1);
    }
    res.json(returnArr);
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
