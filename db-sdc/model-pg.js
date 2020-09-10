// generate csv file for all 3 tables of PostgreSQL

const fs = require('fs');
const helper = require('./helpers/dataHelper.js'); //data storage helper

console.log(helper.rating, 'whats helpers rating?')

//-------+-------+-------+-------+-TABLE 1-+-------+-------+-------+-------+
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
      const photo = `${helper.photo[i%21]}`;
      const data = `${id},${rating},${numOfReviews},${title},${description},${rates},${superHost},${photo}\n`;
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


//-------+-------+-------+-------+-TABLE 2-+-------+-------+-------+-------+
//-------Relatedplaces--2 columns

function writeTenMillRelatedPlaces(maxEntry, writer, encoding, callback) {
  let i = maxEntry; //1000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      let data = '';
      let _id = i;
      let start_id = _id < 13 ? _id + 1 : _id - 13;
      for (var ref_placeId = start_id; ref_placeId < start_id + 12; ref_placeId++) {
        const id = i;
        data += `${id},${ref_placeId}\n`;
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



//-------+-------+-------+-------+-TABLE 3-+-------+-------+-------+-------+
//-------Users---3 columns

function writeTOneMillUsers(maxEntry, writer, encoding, callback) {
  let i = maxEntry; //1000000
  function write() {
    let ok = true;
    do {
      i -= 1;
      let id = i;
      let count = 0;
      let start_id = id < 4 ? id : id - 4;
      let data = '';

      let folder = `${helper.folder[Math.floor(Math.random() * 9)]}`;
      for (let saved_placeId = start_id; saved_placeId < start_id + 3; saved_placeId++) {
        data += `${id},${folder},${saved_placeId}\n`;
      }

      // 40% chance of generating more folders for one user. Max 5 folders
      while (Math.random() < 0.4 && count < 5) {
        folder = `${helper.folder[Math.floor(Math.random() * 9)]}`;
        for (let saved_placeId = start_id; saved_placeId < start_id + 3; saved_placeId++) {
          data += `${id},${folder},${saved_placeId}\n`;
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
}


// create a stream, name the file and write the headers for the CSV file.
const writePlaces = fs.createWriteStream('places.csv');
writePlaces.write('id,rating,numOfReviews,title,description,rates,superHost,photo\n', 'utf8');

writeTenMillPlaces(10000000, writePlaces, 'utf-8', () => {
  writePlaces.end();
});

const writeRelatedPlaces = fs.createWriteStream('relatedplaces.csv');
writeRelatedPlaces.write('id,ref_placeId\n', 'utf8');

writeTenMillRelatedPlaces(10000000, writeRelatedPlaces, 'utf-8', () => {
  writeRelatedPlaces.end();
});

const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('id,folder,saved_placeId\n', 'utf8');

writeTOneMillUsers(1000000, writeUsers, 'utf-8', () => {
  writeUsers.end();
});