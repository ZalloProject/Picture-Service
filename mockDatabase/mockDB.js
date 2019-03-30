const mongoose = require('mongoose');
// const random = require('mongoose-simple-random');

const conn2 = mongoose.createConnection('mongodb+srv://BenPoling:159260pOling@zallo-czxy0.mongodb.net/mockDB?retryWrites=true', (err) => {
  if (err) {
    throw err;
  }
});

const mockUrlSchema = conn2.model('mockUrls', new mongoose.Schema({
  _id: Number,
  url: String,
}));

// const mockUrls = new mongoose.Schema({
//   _id: Number,
//   url: String,
// });

// mockUrls.plugin(random);

// const urls = mongoose.model('mockUrls', mockUrls);

const getLinks = (cb) => {
  mockUrlSchema.find({}, (err, data) => {
    console.log(data);
    cb(data);
  });
  // mockUrlSchema.findRandom({}, {}, { limit: 9 }, (err, data) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     cb(data);
  //   }
  // });
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
