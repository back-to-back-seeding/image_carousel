/* eslint-disable array-callback-return */
const Listing = require('./index.js');

module.exports = {
  getListings: (id, callback) => {
    Listing.find({'id': id}, (error, listings) => {
      if (error) {
        console.log('cannot search database');
        callback(error, null);
      } else {
        console.log('database searched');
        callback(null, listings);
      }
    });
  },
  //post [{} - 1 listing]
  //db.listings.insert({ id: 13, name: 'newHouse' })
  // db.listings.find({}, {"id": 1, _id:0}).sort({"id": 1})
  createListings: (newListing, cb) => {
    Listing.insert(newListing, (error, res) => {
      if (error) {
        console.log('cannot add to database');
        callback(error);
      } else {
        console.log('added to database!', res);
        callback(null);
      }
    });
  },
  putListing: (listing, callback) => {
    Listing.update(listing, (error, res) => {
      if (error) {
        console.log('cannot add to database');
        callback(error);
      } else {
        console.log('added to database!', res);
        callback(null);
      }
    });
  },
//   router.put('/updateuser/:id', function(req, res) {
//     db.collection('userlist').update({ _id: ObjectId(userToUpdate)}, req.body, function (err, result) {

//     });
// });
  deleteListing: (listing, callback) => {
    Listing.deleteOne(listing, (error, res) => {
      if (error) {
        console.log('cannot delete from database');
        callback(error);
      } else {
        console.log('deleted from database!', res);
        callback(null);
      }
    });
  }
};
