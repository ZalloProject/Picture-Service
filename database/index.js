const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const conn = mongoose.createConnection('mongodb+srv://BenPoling:159260pOling@zallow-a5wej.mongodb.net/test?retryWrites=true', (err) => {
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
  urlSchema.findRandom({}, {}, { limit: 9 }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      cb(data);
    }
  });
};

// const save = (url, _id, cb) => {
//   console.log('did it happen again?')
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
