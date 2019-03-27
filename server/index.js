const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('../database/index.js')


app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.listen(3000, () => console.log('YOUVE BEEN SERVED'))


// app.get('/populateDB', (req, res) => {
//   console.log('I made it here')
//   for(let i = 0; i < 100; i++){
//     let str = `https://s3-us-west-1.amazonaws.com/photosformockzalloproject/${i + 1}.jpg`
//     db.save(str, i, (result) => {
//       console.log(result);
//     })
//   }
// })


