const { Client } = require('pg');

const client = new Client ({
  host: 'localhost',
  user: 'shirleywu',
  database: 'moreplaces',
  port: 5432
});

client.connect((err) => {
  if (err) {
    console.log('failed connecting to psql', err);
  } else {
    console.log('success connecting to psql');
  }
});

// select * from places where id in (select ref_placeId from relatedplaces where id = 499);
const getAllPlaces = (table, id, callback) => {
  console.log('table: ', table, ' & id: ', id)
  client.query(`SELECT * FROM ${table} WHERE ID IN (SELECT ref_placeId FROM relatedplaces WHERE ID = ${id})`,((err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  }));
};

const getUserInfo = (table, id, callback) => {
  console.log('table: ', table, ' & id: ', id)
  client.query(`SELECT * FROM ${table} WHERE ID = ${id}`,((err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  }));
};


// module.exports = client;
module.exports.getAllPlaces = getAllPlaces;
module.exports.getUserInfo = getUserInfo;

