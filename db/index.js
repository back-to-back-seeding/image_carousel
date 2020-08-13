const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/suggestedListings', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

const listingSchema = new mongoose.Schema({
  image: String,
  description: String,
  title: String,
  rate: Number,
  avgRating: Number,
  numberOfRatings: Number,
  previouslySaved: Boolean,
  superhost: Boolean,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
