//PLACES DATA GENERATION
const helper = {
  rating: [4.55, 4.78, 3.9, 4.20, 4.55, 5.0],
  numOfReviews: [238, 150, 23, 16, 5, 39, 303],
  title: ['Port House Shibuya', 'Posh Tsukiji', 'sakura - standard pod', 'T-ROOMS near Ginza'],
  description: ['Newly built in 2020', 'long term stay', '6 min to Minowa station', 'ZEN loge 5 bedrooms', '4 min Nihonbashi', 'Namba Hara apartment 45'],
  rates: [96, 101, 110, 130, 150, 200, 210],
  superHost: [true, false],
  photo: ["https://5erflies.s3-us-west-1.amazonaws.com/Trinita/0e5d88c8-9699-44db-92bf-3a73f9257203.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/Trinita/5ecb5c12-8388-4480-ae24-2452a887afac.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/Trinita/35cf4e3b-bc25-45d3-85ba-32793b38b7f1.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/Trinita/36fbfe33-0c45-49b5-aea0-0cb587d3980c.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/Trinita/199caa07-633c-45ef-91e1-f5abc75de652.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/Trinita/d44fb71c-6573-4796-bf8b-12cedde025a8.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.07.44+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.08.45+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.13.08+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.14.20+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.14.59+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.15.41+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.16.20+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.17.31+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.18.21+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.18.39+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.19.19+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.19.56+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.20.17+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.20.53+PM.png",
  "https://5erflies.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-09+at+1.21.27+PM.png"],
  folder: ['LA Trip', 'Tahoe Trip', 'Vegas Trip', 'Italy Trip', 'Greece Trip', 'Seattle Trip', 'Tokyo Trip', 'Thailand Trip', 'Germany Trip']
};


module.exports = helper;