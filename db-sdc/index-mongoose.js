//places
const placesSchema = mongoose.Schema({
  placeId: { type: Number },
  rating: { type: Number },
  numOfReviews: { type: Number },
  title: { type: String },
  description: { type: String },
  rates: { type: Number },
  superHost: { type: Boolean },
  photo: { type: String },
  morePlacesId: { type: Array } //12 other more places' IDs
});

//  users
const usersSchema = mongoose.Schema({
  userId: { type: Number },
  list: { type: Object }
  savedlist: {
    folder: { type: String },
    refPlaceId: { type: Array }
  }
});

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

/*
3         |   "img-link"
11        |   "img-link"
5         |   "img-link"
8         |   "img-link"

{ 3: 'www.picture.com},
{ 4: 'www.picture.com},
{ 5: 'www.picture.com},
{ 6: 'www.picture.com},

[3,4,5,6]
