// data generation for two tables of mongo

const fs = require('fs');

const helper = require('./helpers/dataHelper.js'); //data storage helper

console.log(helper.superHost, 'whats helpers superhost?');

//PLACES DATA GENERATION
const seedPlaces = (entries) => {
  let places = [];
  for (let i = 1; i <= entries; i++) {
    placesInfo = {
      placeId: i,
      rating: `${helper.rating[i%6]}`,
      numOfReviews: `${helper.numOfReviews[i%7]}`,
      title: `${helper.title[i%4]}`,
      description: `${helper.description[i%6]}`,
      rates: `${helper.rates[i%7]}`,
      superHost: `${helper.superHost[i%2]}`,
      photo: `${helper.photo[i%6]}`,
      morePlacesId: Array.from(new Array(12), (_, index) => index + i + 1)
    }
    places.push(placesInfo);
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('mongo-places.json', JSON.stringify(places), (err) => {
      if (err) {
        reject (err);
      } else {
        resolve (places);
      }
    });
  });
}

seedPlaces(20)
  .then(() => {console.log('success seeding places')})
  .catch(() => {console.log('failed seeding places')});


//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//USERS DATA GENERATION

const seedUsers = (entries) => {
  let user = [];
  for (let i = 1; i <= entries; i++) {
    userInfo = {
      'userId': i,
      'savedlist': {
        'folder': `${helper.folder[Math.floor(Math.random() * 10)]}`,
        'refPlaceId': Array.from(new Array(Math.floor(Math.random() * 4)), (_, index) => index + i + 1)
      }
    }
    user.push(userInfo);
    // add more folders to one user's saved list on random
    var count = 0;
    while (Math.random() < 0.4 && count < 5) {
      userInfo = {
        'userId': i,
        'savedlist': {
          'folder': `${helper.folder[i%3]}`,
          'refPlaceId': Array.from(new Array(5), (_, index) => index + i + 1)
        }
      }
      user.push(userInfo);
      count++;
    }
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('mongo-users.json', JSON.stringify(user), (err) => {
      if (err) {
        reject (err);
      } else {
        resolve (user);
      }
    });
  });
}

seedUsers(20)
  .then(() => {console.log('success seeding users')})
  .catch(() => {console.log('failed seeding users')});
