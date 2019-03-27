const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

mongoose.connect('mongodb://localhost/FEC', (err) => {
  if (err) {
    throw err;
  }
});

const urlSchema = new mongoose.Schema({
  _id: Number,
  url: String,
});

urlSchema.plugin(random);

const links = mongoose.model('urls', urlSchema);

// const getAll = (search, cb) => {
//   links.find({}, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       cb(data);
//     }
//   });
// };

const getLinks = (cb) => {
  links.findRandom({}, {}, { limit: 6 }, (err, data) => {
    if (err) {
      throw err;
    } else {
      cb(data);
    }
  });
};

// const save = (url, _id, cb) => {
//   const urls = new links({
//     _id,
//     url,
//   });
//   urls.save((err, allLinks) => {
//     if (err) {
//       throw err;
//     } else {
//       cb(allLinks);
//     }
//   });
// };
module.exports.getLinks = getLinks;
// module.exports.getAll = getAll;
// module.exports.save = save;
