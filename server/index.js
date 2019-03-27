const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // db.getAll('links', (data) => console.log(data))
  res.statusCode(200);
});

module.exports = app;


// app.get('/populateDB', (req, res) => {
//   console.log('I made it here')
//   for(let i = 0; i < 100; i++){
//     let str = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${i + 1}.jpg`
//     db.save(str, i, (result) => {
//       console.log(result);
//     })
//   }
// })
