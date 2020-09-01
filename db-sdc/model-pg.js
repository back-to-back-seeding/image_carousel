// generate csv file for all 3 tables inside PostgreSQL

const fs = require('fs');
const helper = require('./helpers/dataHelper.js'); //data storage helper

console.log(helper.rating, 'whats helpers rating?')

//-------Places--8 columns
function writeTenMillPlaces(maxEntry, writer, encoding, callback) {
  let i = maxEntry; //10000000
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
      let start_id = id < 13 ? id : id - 13;
      const morePlacesId = Array.from(new Array(12), (_, index) => index + start_id + 1);
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



//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//-------RelatedPlaces--2 columns

function writeTenMillRelatedPlaces(maxEntry, writer, encoding, callback) {
  let i = maxEntry; //1000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = i;
      let start_id = id < 13 ? id : id - 13;
      const ref_placeId = Array.from(new Array(12), (_, index) => index + start_id + 1);
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



//-------+-------+-------+-------+-------+-------+-------+-------+-------+
//-------Users

function writeTOneMillUsers(maxEntry, writer, encoding, callback) {
  let i = maxEntry; //1000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = i;
      const folder = `${helper.folder[Math.floor(Math.random() * 9)]}`;
      let start_id = id < 4 ? id : id - 4;
      const saved_placeId = Array.from(new Array(3), (_, index) => index + start_id + 1);
      let data = `${id},${folder},${saved_placeId}\n`;
      let count = 0;
      while (Math.random() < 0.4 && count < 5) {
        const folder = `${helper.folder[Math.floor(Math.random() * 9)]}`;
        const saved_placeId = Array.from(new Array(3), (_, index) => index + start_id + 1);
        data += `${id},${folder},${saved_placeId}\n`;
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
}


// create a stream, name the file and write the headers for the CSV file.
const writePlaces = fs.createWriteStream('places.csv');
writePlaces.write('id,rating,numOfReviews,title,description,rates,superHost,photo\n', 'utf8');

writeTenMillPlaces(30, writePlaces, 'utf-8', () => {
  writePlaces.end();
});

const writeRelatedPlaces = fs.createWriteStream('relatedPlaces.csv');
writeRelatedPlaces.write('id,ref_placeId\n', 'utf8');

writeTenMillRelatedPlaces(30, writeRelatedPlaces, 'utf-8', () => {
  writeRelatedPlaces.end();
});

const writeUsers = fs.createWriteStream('Users.csv');
writeUsers.write('id,saved_placeId\n', 'utf8');

writeTOneMillUsers(30, writeUsers, 'utf-8', () => {
  writeUsers.end();
});