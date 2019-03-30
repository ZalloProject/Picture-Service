const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const conn2 = mongoose.createConnection('mongodb+srv://BenPoling:159260pOling@zallo-czxy0.mongodb.net/mockDB?retryWrites=true', (err) => {
  if (err) {
    throw err;
  }
});

const mocks = new mongoose.Schema({
  _id: Number,
  url: String,
});

mocks.plugin(random);

const mockUrlSchema = conn2.model('mockUrls', mocks);

const getLinks = (cb) => {
  mockUrlSchema.findRandom({}, {}, { limit: 9 }, (err, data) => {
    if (err) {
      throw err;
    } else {
      cb(data);
    }
  });
};

// const save = (url, _id, cb) => {
//   mockUrlSchema.create({
//     _id,
//     url,
//   }, (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       cb(data);
//     }
//   });
// };
module.exports.getLinks = getLinks;
// module.exports.getAll = getAll;
// module.exports.save = save;