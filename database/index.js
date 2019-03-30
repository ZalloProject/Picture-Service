const mongoose = require('mongoose');
// const random = require('mongoose-simple-random');

const conn = mongoose.createConnection('mongodb+srv://BenPoling:159260pOling@zallow-a5wej.mongodb.net/test?retryWrites=true', (err) => {
  if (err) {
    throw err;
  }
});

const urlSchema = conn.model('urls', new mongoose.Schema({
  _id: Number,
  url: String,
}));

// const urlSchema = new mongoose.Schema({
//   _id: Number,
//   url: String,
// });

// urlSchema.plugin(random);

// const links = mongoose.model('urls', urlSchema);

const getLinks = (cb) => {
  urlSchema.find({}, (err, data) => {
    cb(data);
  });
  // urlSchema.findRandom({}, {}, { limit: 9 }, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     cb(data);
  //   }
  // });
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

// var conn      = mongoose.createConnection('mongodb://localhost/testA');
// var conn2     = mongoose.createConnection('mongodb://localhost/testB');

// // stored in 'testA' database
// var ModelA    = conn.model('Model', new mongoose.Schema({
//   title : { type : String, default : 'model in testA database' }
// }));

// // stored in 'testB' database
// var ModelB    = conn2.model('Model', new mongoose.Schema({
//   title : { type : String, default : 'model in testB database' }
// }));
