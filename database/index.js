const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC', (err) => {
  if (err) {
    throw err;
  }
});

const urlSchema = new mongoose.Schema({
  _id: Number,
  url: String,
});

const links = mongoose.model('urls', urlSchema);

const getAll = (search, cb) => {
  links.find({}, (err, data) => {
    if (err) {
      throw err;
    } else {
      cb(data);
    }
  });
};

module.exports.getAll = getAll;


// const save = (url, _id, cb) => {
//   const urls = new links({
//     _id,
//     url
//   })
//   urls.save((err, allLinks) => {
//     if(err) {
//       throw err;
//     } else {
//       cb(allLinks);
//     }
//   })
// }

// module.exports.save = save;