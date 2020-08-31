const fs = require('fs');
const helper = require('./helpers/dataHelper.js');

console.log(helper.rating, 'whats helpers rating?')

// create a stream, name the file and write the headers for the CSV file.
const writePlaces = fs.createWriteStream('places.csv');
writePlaces.write('id,rating,numOfReviews,title,description,rates,superHost,photo\n', 'utf8');

function writeTenMillPlaces(writer, encoding, callback) {
  let i = 5; //10000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = i;
      const rating=  `${helper.rating[i%6]}`;
      const numOfReviews = `${helper.numOfReviews[i%7]}`;
      const title = `${helper.title[i%4]}`;
      const description = `${helper.description[i%6]}`;
      const rates = `${helper.rates[i%7]}`;
      const superHost = `${helper.superHost[i%2]}`;
      const photo = `${helper.photo[i%6]}`;
      const morePlacesId = Array.from(new Array(12), (_, index) => index + i + 1);
      const data = `${id},${rating},${numOfReviews},${title},${description},${rates},${superHost},${photo},${morePlacesId}\n`;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
write();
}

writeTenMillPlaces(writePlaces, 'utf-8', () => {
  writePlaces.end();
})
//relatedPlaces


// const writeUsers = fs.createWriteStream('users.csv');
// writeUsers.write('id,rating,numOfReviews,title,description,rates,superHost,photo\n', 'utf8');

// function writeTenMillUsers(writer, encoding, callback) {
//   let i = 3; //10000000
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const username = faker.internet.userName();
//       const avatar = faker.image.avatar();
//       const data = `${id},${username},${avatar}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
// // see if we should continue, or wait
// // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
// // had to stop early!
// // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }