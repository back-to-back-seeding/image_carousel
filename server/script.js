import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate } from 'k6/metrics';

export let options = {
  stages: [
    { duration: '5s', target: 1500 },
    { duration: '10s', target: 2300 },
    { duration: '15s', target: 3000 },
  ]
}

export default function() {
  let table = 'places'
  let queryId = Math.floor(Math.random() * 5500000);
  var url = `http://localhost:3005/${table}/${queryId}`;
  check(http.get(url), {
    "status is 200": (r) => r.status == 200
  }) || errorRate.add(1);


  let folderName = JSON.stringify({folder: 'Hawaii Trip'});
  let params = {
    headers: {'Content-Type': 'application/json'}
  };
  let res = http.post(`http://localhost:3005/users/${queryId}/folder`, folderName, params);
  check(res, {"status is 201": (r) => r.status == 201
  });
  sleep(1);
};



// export default function() {
//   group('API testing', () => {
//     group('get places', () => {
//       let table = 'places'
//       let queryId = Math.floor(Math.random() * 5500000);
//       var url = `http://localhost:3005/${table}/${queryId}`;
//       check(http.get(url), {
//         "status is 200": (r) => r.status == 200
//       }) || errorRate.add(1);
//     });

//     group('get users', () => {
//       let table = 'users'
//       let queryId = Math.floor(Math.random() * 7500000);
//       var url = `http://localhost:3005/${table}/${queryId}`;
//       check(http.get(url), {
//         "status is 200": (r) => r.status == 200
//       }) || errorRate.add(1);
//     });

//     group('post folder to a user', () => {
//       let table = 'users'
//       let queryId = Math.floor(Math.random() * 7500000);
//       let folderName = JSON.stringify({folder: 'Hawaii Trip'});

//       let params = {
//         headers: {'Content-Type': 'application/json'}
//       };

//       let res = http.post(`http://localhost:3005/${table}/${queryId}/folder`, folderName, params);
//       check(res, {"status is 201": (r) => r.status == 201
//       });
//     });

//   });
//   sleep(1); // We add it after each check();
// };

  // let queryId = Math.floor(Math.random() * 50000000);
  // var url = `http://localhost:3005/${table}/${queryId}`;
  // check(http.get(url), {
  //   "status is 200": (r) => r.status == 200
  // }) || errorRate.add(1);


