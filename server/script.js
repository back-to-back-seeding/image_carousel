import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let options = {
  stages: [
    { duration: '3s', target: 200 },
    { duration: '10s', target: 500 },
    { duration: '30s', target: 1000 },
  ]
}
// const tables = ['places', 'users']

export default function() {
  // let table = tables[Math.floor(Math.random() * 2) + 1];
  let table = 'places'
  let queryId = Math.floor(Math.random() * 5500000);
  var url = `http://localhost:3005/${table}/${queryId}`;
  check(http.get(url), {
    "status is 200": (r) => r.status == 200
  }) || errorRate.add(1);

  // We add it after each check(); sleep for a half second
  sleep(1);
};

  // let queryId = Math.floor(Math.random() * 50000000);
  // var url = `http://localhost:3005/${table}/${queryId}`;
  // check(http.get(url), {
  //   "status is 200": (r) => r.status == 200
  // }) || errorRate.add(1);


