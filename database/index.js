const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

mongoose.connect('mongodb+srv://BenPoling:159260pOling@zallow-a5wej.mongodb.net/test?retryWrites=true', (err) => {
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
