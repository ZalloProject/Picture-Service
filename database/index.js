const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const conn = mongoose.createConnection('mongodb+srv://BenPoling:159260pOling@zallow-a5wej.mongodb.net/mockData?retryWrites=true', (err) => {
  if (err) {
    throw err;
  }
});

const links = new mongoose.Schema({
  _id: Number,
  url: String,
});

links.plugin(random);

const urlSchema = conn.model('urls', links);

const getLinks = (cb) => {
  const randomNumber = Math.floor(Math.random() * 50);
  urlSchema.findRandom({}, {}, { limit: randomNumber }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      cb(data);
    }
  });
};

// const save = (url, _id, cb) => {
//   const newLinks = new urlSchema({
//     _id,
//     url,
//   });
//   newLinks.save((err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
// };
module.exports.getLinks = getLinks;
// module.exports.getAll = getAll;
// module.exports.save = save;
