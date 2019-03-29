const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

mongoose.connect('mongodb+srv://BenPoling:159260pOling@zallow-a5wej.mongodb.net/mockDB?retryWrites=true', (err) => {
  if (err) {
    throw err;
  }
});

const mockUrlSchema = new mongoose.Schema({
  _id: Number,
  url: String,
});

mockUrlSchema.plugin(random);

const links = mongoose.model('mockUrls', mockUrlSchema);

const getLinks = (cb) => {
  links.findRandom({}, {}, { limit: 9 }, (err, data) => {
    if (err) {
      throw err;
    } else {
      cb(data);
    }
  });
};

// const save = (url, _id, cb) => {
//   console.log('did it happen again?')
//   links.create({
//     _id,
//     url,
//   }, (err, data) => {
//     if(err) {
//       throw err;
//     } else {
//       cb(data);
//     }
//   });
// };
module.exports.getLinks = getLinks;
// module.exports.getAll = getAll;
// module.exports.save = save;
