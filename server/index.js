require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const psql = require('../db-sdc/controllers');

const app = express();
app.use(express.json());
app.use(compression());

const PORT = 3005;
app.use(express.static(path.join(__dirname, '../public')));
//:room_id', express.static(path.join(__dirname, '../public')));

// initial page load - get 12 related places of query id
app.get('/places/:id', (req, res) => {
  let queryId = req.params.id;
  console.log('places req.param?', req.params.id);
  psql.getAllPlaces('places', queryId, (err, places) => {
    if (err) {
      console.log('get places failed');
      res.status(400).send(err);
    } else {
      console.log('get places received!');
      res.status(200).send(places);
    }
  });
});

// get a user's saved info
app.get('/users/:id', (req, res) => {
  let queryId = req.params.id;
  console.log('users req.param?', req.params.id);
  psql.getUserInfo('users', queryId, (err, userInfo) => {
    if (err) {
      console.log('get users failed');
      res.status(400).send(err);
    } else {
      console.log('get users received!');
      res.status(200).send(userInfo);
    }
  });
});

// user add a new folder -->  json: {"folder": foldername}
app.post('/users/:id/folder', (req, res) => {
  const folder = {folder: req.body.folder};
  psql.addUserFolder('users', req.params.id, folder.folder, (err, userInfo) => {
    if (err) {
      console.log('post folder failed');
      res.status(400).send(err);
    } else {
      console.log('post folder received!');
      res.status(201).send(userInfo);
    }
  });
});

// user add a new place into folder -->  json: {"saved_placeid": id}
// app.post('/users/:id/folder', (req, res) => {
//   const saved_placeid = {saved_placeid: req.body.saved_placeid};
//   psql.addUserFolder('users', req.params.id, saved_placeid.saved_placeid, (err, userInfo) => {
//     if (err) {
//       console.log('save placeId failed');
//       res.status(400).send(err);
//     } else {
//       console.log('save placeId received!');
//       res.status(201).send(userInfo);
//     }
//   });
// });

app.delete('/users/:id/folder', (req, res) => {
  const folder = {folder: req.body.folder};
  psql.deleteUserFolder('users', req.params.id, folder.folder, (err, userInfo) => {
    if (err) {
      console.log('delete folder failed');
      res.status(400).send(err);
    } else {
      console.log('deleted folder!');
      res.status(204).send();
    }
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});
