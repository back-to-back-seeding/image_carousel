const fs = require('fs');
const mongodb = require('index-mongoose.js');

const reviews = [1, 10, 20, 40, 60];

const seedData = (entries) => {
  let dataStr = 'id reviews: ';
  for (let i = 1; i < entries; i++) {
    dataStr += `\n`;
    dataStr += `${i}`;
    dataStr += `${reviews[i%6]}`;
    dataStr += `\n`;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('mongo-db.txt', dataStr, (err) => {
      if (err) {
        reject (err);
      } else {
        resolve (dataStr);
      }
    });
  });
}

seedData(10)
  .then(() => {console.log('success')})
  .catch(() => {console.log('oopsie')});
