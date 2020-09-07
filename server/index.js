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
app.get('/users/:id/', (req, res) => {
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

// app.post('/users/:id/', (req, res) => {
//   console.log('post req working!');
//   let queryparam = req.query;
//   const newListing = {
//     "id" : 122,
//     "image" : "https://fec-image-carousel-photos.s3.us-east-2.amazonaws.com/image-130.jpg",
//     "description" : "Beautiful houseboat in San Clemente",
//     "title" : "Entire unit·6 beds",
//     "rate" : 332,
//     "avgRating" : 4.53,
//     "numberOfRatings" : 78,
//     "wasLiked" : true,
//     "superhost" : false
//   };
//   model.createListings(newListing, (error, listings) => {
//     if (error) {
//       console.log('post failed');
//       res.status(400).send(error);
//     } else {
//       console.log('POST received!', req.body);
//       res.status(201).send();
//     }
//   }, req.body);
// });

// update // idempotent
app.put('/places', (req, res) => {
  let queryId = req.query;
  console.log('put req called!');
  let queryParams = req.query; //object
  model.putListing(queryParams, (error, listings) => {
    if (error) {
      console.log('put failed');
      res.status(400).send(error);
    } else {
      console.log('PUT works!');
      res.status(204).send();
    }
  });
});

// use URL to delete listing with id=12: http://localhost:3004/places?id=12
app.delete('/places', (req, res) => {
  let queryId = req.query; //delete by id
  console.log(queryId); // {id: '12'}
  console.log('delete req working!');
  model.deleteListing(queryId, (error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('delete received!');
      res.status(200).send(listings);
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
