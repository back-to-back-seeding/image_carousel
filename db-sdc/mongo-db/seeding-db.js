// data generation for all two tables of mongo

const fs = require('fs');
const helper = require('./helpers/dataHelper.js'); //data storage helper
console.log(helper.superHost, 'mongo: whats helpers superhost?');

//-------+-------+-------+-------+-TABLE 1-+-------+-------+-------+-------+
//-------Places--9 columns

const writeTenMillPlacesMg = (maxEntry, writer, encoding, callback) => {
  let i = maxEntry; //10000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      let data= '';
      let _id = i;
      // start_id determine next 12 more places
      let start_id = _id < 13 ? _id + 1 : _id - 13;
      for (var morePlacesId = start_id; morePlacesId < start_id + 12; morePlacesId++) {
        let placeId = i;
        let rating = `${helper.rating[i%6]}`;
        let numOfReviews = `${helper.numOfReviews[i%7]}`;
        let title = JSON.stringify(`${helper.title[i%4]}`);
        let description = JSON.stringify(`${helper.description[i%6]}`);
        let rates = `${helper.rates[i%7]}`;
        let superHost = `${helper.superHost[i%2]}`;
        let photo = JSON.stringify(`${helper.photo[i%6]}`);
        data += `${placeId},${rating},${numOfReviews},${title},${description},${rates},${superHost},${photo},${morePlacesId}\n`;
      }
      if (i === 1) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i >= 1 && ok);
    if (i >= 1) {
      writer.once('drain', write);
    }
  }
  write();
};

// const writePlaces = fs.createWriteStream('placesMg.csv');
// writePlaces.write('placeId,rating,numOfReviews,title,description,rates,superHost,photo,morePlacesId\n', 'utf8');

// writeTenMillPlacesMg(10000000, writePlaces, 'utf-8', () => {
//   writePlaces.end();
// });


//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//USERS DATA GENERATION

const writeTenMillUsersMg = (maxEntry, writer, encoding, callback) => {
  let i = maxEntry; //10000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      let _id = i;
      let count = 0;
      let userId = i;
      let start_id = _id < 4 ? _id : _id - 4;
      let data= '';

      let folder = `${helper.folder[Math.floor(Math.random() * 9)]}`;
      for (let refPlaceId = start_id; refPlaceId < start_id + 3; refPlaceId++) {
        data += `${userId},${folder},${refPlaceId}\n`;
      }

      // 40% chance of generating more folders for one user. Max 4 folders
      while (Math.random() < 0.4 && count < 5) {
        folder = `${helper.folder[Math.floor(Math.random() * 9)]}`;
        for (let refPlaceId = start_id; refPlaceId < start_id + 3; refPlaceId++) {
          data += `${userId},${folder},${refPlaceId}\n`;
        }
        count++;
      }
      if (i === 1) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i >= 1 && ok);
    if (i >= 1) {
      writer.once('drain', write);
    }
  }
  write();
};

const writeUsers = fs.createWriteStream('usersMg.csv');
writeUsers.write('userId,folder,refPlaceId\n', 'utf8');

writeTenMillUsersMg(10000000, writeUsers, 'utf-8', () => {
  writeUsers.end();
});



// const writeUsers = (entries) => {
//   let user = [];
//   for (let i = 1; i <= entries; i++) {
//     userInfo = {
//       'userId': i,
//       'savedlist': {
//         'folder': `${helper.folder[Math.floor(Math.random() * 10)]}`,
//         'refPlaceId': Array.from(new Array(Math.floor(Math.random() * 4)), (_, index) => index + i + 1)
//       }
//     }
//     user.push(userInfo);
//     // add more folders to one user's saved list on random
//     var count = 0;
//     while (Math.random() < 0.4 && count < 5) {
//       userInfo = {
//         'userId': i,
//         'savedlist': {
//           'folder': `${helper.folder[i%3]}`,
//           'refPlaceId': Array.from(new Array(5), (_, index) => index + i + 1)
//         }
//       }
//       user.push(userInfo);
//       count++;
//     }
//   }
//   return new Promise((resolve, reject) => {
//     fs.writeFile('mongo-users.json', JSON.stringify(user), (err) => {
//       if (err) {
//         reject (err);
//       } else {
//         resolve (user);
//       }
//     });
//   });
// }

// writeUsers(100)
//   .then(() => {console.log('success writing users')})
//   .catch(() => {console.log('failed writing users')});

// const writePlaces = (entries) => {
//   let places = [];
//   for (let i = 1; i <= entries; i++) {
//     placesInfo = {
//       placeId: i,
//       rating: `${helper.rating[i%6]}`,
//       numOfReviews: `${helper.numOfReviews[i%7]}`,
//       title: `${helper.title[i%4]}`,
//       description: `${helper.description[i%6]}`,
//       rates: `${helper.rates[i%7]}`,
//       superHost: `${helper.superHost[i%2]}`,
//       photo: `${helper.photo[i%6]}`,
//       morePlacesId: Array.from(new Array(12), (_, index) => index + i + 1)
//     }
//     places.push(placesInfo);
//   }
//   return new Promise((resolve, reject) => {
//     fs.writeFile('mongo-places.json', JSON.stringify(places), (err) => {
//       if (err) {
//         reject (err);
//       } else {
//         resolve (places);
//       }
//     });
//   });
// }

// writePlaces(100)
//   .then(() => {console.log('success writing places')})
//   .catch(() => {console.log('failed writing places')});