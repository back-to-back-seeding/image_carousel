const mongoose = require('mongoose');
// mongoose.connect('mongodb://database:27017/listing', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://127.0.0.1:27017/listing', { useNewUrlParser: true, useUnifiedTopology: true });
// conencting mongoose odm to mongo
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("admin: database connected!"));


const placesSchema = mongoose.Schema({
  placeId: { type: Number },
  rating: { type: Number },
  numOfReviews: { type: Number },
  title: { type: String },
  description: { type: String },
  rates: { type: Number },
  superHost: { type: Boolean },
  photo: { type: String },  //current place's photo
  morePlacesId: { type: Array } //12 other more places' IDs
});

const usersSchema = mongoose.Schema({
  userId: { type: Number },
  list: { type: Object },
  savedlist: {
    folder: { type: String },
    refPlaceId: { type: Array }
  }
});


let Places = mongoose.model('Places', placesSchema);
let Users = mongoose.model('Users', usersSchema);


module.exports.placesSchema = placesSchema;
module.exports.usersSchema = usersSchema;


// savedList: {
//   'Lake Tahoe trip': [4,6,48,300],
//   'LA trip': [900, 350, 22]
// }

/*
^ loop 1000 times * 1000 times
  total = 1M listing
  12 photos per listing (use small, lower definition pics)
  use MongoDB node.js for driver/ library
*/