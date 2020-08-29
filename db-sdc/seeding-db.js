const fs = require('fs');
// const mongodb = require('index-mongoose.js');


//PLACES DATA GENERATION
const placeId;
const rating = [4.55, 4.78, 3.9, 4.20, 4.55, 5.0];
const numOfReviews = [238, 150, 23, 16, 5, 39, 303];
const title = ['Port House Shibuya', 'Posh Tsukiji', 'sakura - standard pod', 'T-ROOMS near Ginza'];
const description = ['Newly built in 2020', 'long term stay', '6 min to Minowa station', 'ZEN loge 5 bedrooms', '4 min Nihonbashi', 'Namba Hara apartment 45'];
const rates = [96, 101, 110, 130, 150, 200, 210];
const superHost = [true, false];
const photo = ["https://5erflies.s3-us-west-1.amazonaws.com/Trinita/0e5d88c8-9699-44db-92bf-3a73f9257203.jpg",
"https://5erflies.s3-us-west-1.amazonaws.com/Trinita/5ecb5c12-8388-4480-ae24-2452a887afac.jpg",
"https://5erflies.s3-us-west-1.amazonaws.com/Trinita/35cf4e3b-bc25-45d3-85ba-32793b38b7f1.jpg",
"https://5erflies.s3-us-west-1.amazonaws.com/Trinita/36fbfe33-0c45-49b5-aea0-0cb587d3980c.jpg",
"https://5erflies.s3-us-west-1.amazonaws.com/Trinita/199caa07-633c-45ef-91e1-f5abc75de652.jpg",
"https://5erflies.s3-us-west-1.amazonaws.com/Trinita/d44fb71c-6573-4796-bf8b-12cedde025a8.jpg"]
const morePlacesId += placeId;

const seedPlaces = (entries) => {
  for (let i = 0; i < entries; i++) {
    const placesInfo = {
      placeId: i + 1,
      rating: `${rating[i%6]}`,
      numOfReviews: `${numOfReviews[i%7]}`,
      title: `${title[i%4]}`,
      description: `${description[i%6]}`,
      rates: `${rates[i%7]}`,
      superHost: `${superHost[i%2]}`,
      photo: `${photo[i%6]}`
    }
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('mongo-places.txt', JSON.stringify(placesInfo), (err) => {
      if (err) {
        reject (err);
      } else {
        resolve (dataObj);
      }
    });
  });
}

seedPlaces(100)
  .then(() => {console.log('success seeding places')})
  .catch(() => {console.log('failed seeding places')});


//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//USERS DATA GENERATION
const userId = [1, 2, 3, 4, 5, 6, 7];
const savedlist = {
  folder: ['LA Trip', 'Tahoe Trip', 'Vegas Trip', 'Italy Trip', 'Greece Trip', 'Seattle Trip'],
  refPlaceId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
const seedUsers = (entries) => {
  for (let i = 1; i < entries; i++) {
    const userInfo = {
      userId: `${userId[i%7]}`,
      savedlist: {
        folder: `${savedList.folder[i%6]}`,
        refPlaceId: `${savedList.refPlaceId[i%12]}`
      }
    }
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('mongo-users.txt', JSON.stringify(userInfo), (err) => {
      if (err) {
        reject (err);
      } else {
        resolve (dataObj);
      }
    });
  });
}

seedUsers(100)
  .then(() => {console.log('success seeding users')})
  .catch(() => {console.log('failed seeding users')});
