// generate csv file for all 3 tables inside PostgreSQL

const fs = require('fs');
const helper = require('./helpers/dataHelper.js'); //data storage helper

console.log(helper.rating, 'whats helpers rating?')

//-------Places--8 columns
function writeTenMillPlaces(writer, encoding, callback) {
  let i = 10; //10000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = i;
      const rating =  `${helper.rating[i%6]}`;
      const numOfReviews = `${helper.numOfReviews[i%7]}`;
      const title = `${helper.title[i%4]}`;
      const description = `${helper.description[i%6]}`;
      const rates = `${helper.rates[i%7]}`;
      const superHost = `${helper.superHost[i%2]}`;
      const photo = `${helper.photo[i%6]}`;
      const morePlacesId = Array.from(new Array(12), (_, index) => index + i + 1);
      const data = `${id},${rating},${numOfReviews},${title},${description},${rates},${superHost},${photo},${morePlacesId}\n`;
      if (i === 1) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i >= 1 && ok);
    if (i >= 1) {
    // had to stop early! write some more once it drains
      writer.once('drain', write);
    }
  }
write();
}

// create a stream, name the file and write the headers for the CSV file.
const writePlaces = fs.createWriteStream('places.csv');
writePlaces.write('id,rating,numOfReviews,title,description,rates,superHost,photo\n', 'utf8');

writeTenMillPlaces(writePlaces, 'utf-8', () => {
  writePlaces.end();
});

//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//-------RelatedPlaces--2 columns

function writeTenMillRelatedPlaces(writer, encoding, callback) {
  let i = 10; //1000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = i;
      const ref_placeId = Array.from(new Array(12), (_, index) => index + i + 1);
      const data = `${id},${ref_placeId}\n`;
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
}

const writeRelatedPlaces = fs.createWriteStream('relatedPlaces.csv');
writeRelatedPlaces.write('id,ref_placeId\n', 'utf8');

writeTenMillRelatedPlaces(writeRelatedPlaces, 'utf-8', () => {
  writeRelatedPlaces.end();
});

//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//-------Users

function writeTOneMillUsers(writer, encoding, callback) {
  let i = 10; //1000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = i;
      const
      const saved_placeId = Array.from(new Array(12), (_, index) => index + i + 1);
      const data = `${id},${saved_placeId}\n`;
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
}

const writeUsers = fs.createWriteStream('Users.csv');
writeUsers.write('id,saved_placeId\n', 'utf8');

writeTOneMillUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});