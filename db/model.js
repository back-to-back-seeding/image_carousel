const Listing = require('./index.js');

module.exports = {
  getListings: (callback) => {
    Listing.find((error, listings) => {
      if (error) {
        callback(error);
      } else {
        callback(null, listings);
      }
    });
  },
};
