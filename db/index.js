// ===============================================================================================>
// Script for setting up db connection
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/suggestedListings', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

// import helpers module to help generate mock data
const helpers = require('./helpers/helpers');

// ===============================================================================================>
// Script for seeing db
const listingSchema = new mongoose.Schema({
  image: String,
  description: String,
  title: String,
  rate: Number,
  ratingNumber: Number,
  previouslySaved: Boolean,
  superhost: Boolean,
});

const Listing = mongoose.model('Listing', listingSchema);

const createListing = () => {
  for (let i = 1; i < 50; i += 1) {
    const listing = new Listing({
      image: `https://fec-image-carousel-photos.s3.us-east-2.amazonaws.com/image-${helpers.selectImage()}.jpg`,
      description: helpers.setRandomDescription(),
      title: helpers.setRandomTitle(),
      rate: helpers.setRandomRate(),
      numberOfRatings: helpers.setRandomNumOfRatings(),
      previosulySaved: faker.fake('{{random.boolean}}'),
      superhost: faker.fake('{{random.boolean}}'),
    });
    listing.save()
      .then((doc) => {
        // console.log('Saved!');
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
createListing();

module.exports = Listing;
