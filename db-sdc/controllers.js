const { Pool } = require('pg');

const pool = new Pool ({
  host: '13.57.247.157',
  user: 'postgres',
  password: '$sdcmoreplaces',
  database: 'moreplaces',
  port: 5432
});

pool.connect((err) => {
  if (err) {
    console.log('failed connecting to psql', err);
  } else {
    console.log('success connecting to psql');
  }
});

// select * from places where id in (select ref_placeId from relatedplaces where id = 499);
const getAllPlaces = (table, id, callback) => {
  console.log('table: ', table, ' & id: ', id)
  pool.query(`SELECT * FROM ${table} WHERE ID IN (SELECT ref_placeId FROM relatedplaces WHERE ID = ${id})`,((err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  }));
};

const getUserInfo = (table, id, callback) => {
  console.log('table: ', table, ' & id: ', id)
  pool.query(`SELECT * FROM ${table} WHERE ID = ${id}`,((err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  }));
};

// INSERT INTO users(id, folder, saved_placeid)
// VALUES (1, 'China Trip', 88);
const addUserFolder = (table, id, folderName, callback) => {
  console.log(`ADD - table: ${table}\n id: ${id}\n folderName: ${folderName}`);
  console.log(`INSERT INTO ${table} (id,folder) VALUES (${id}, "${folderName}")`);
  pool.query(`INSERT INTO ${table} (id,folder) VALUES (${id}, "${folderName}")`,((err, res) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, res);
    }
  }));
};

//delete from users where id = 1 and saved_placeid = 189 returning *
const deleteUserFolder = (table, id, folderName, callback) => {
  console.log(`DELETE - table: ${table}\n id: ${id}\n folderName: ${folderName}`);
  pool.query(`DELETE FROM ${table} WHERE id = ${id} and folder = '${folderName}'`,((err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  }));
};


module.exports.getAllPlaces = getAllPlaces;         //GET
module.exports.getUserInfo = getUserInfo;           //GET
module.exports.addUserFolder = addUserFolder;       //POST
module.exports.deleteUserFolder = deleteUserFolder; //DELETE

