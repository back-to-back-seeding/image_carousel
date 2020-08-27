# CRUD API Routes

> API routes and data shapes

## Create (POST Request)

  /places/?id=#

```sh
  {
    id: Number,
    image: Array of strings,
    description: String,
    title: String,
    rate: Number,
    avgRating: Number,
    numberOfRatings: Number,
    wasLiked: Boolean,
    superhost: Boolean,
  }
```

## Read (GET Request)

  /places/?id=#

```sh
  {
    id: Number,
    image: Array of strings,
    description: String,
    title: String,
    rate: Number,
    avgRating: Number,
    numberOfRatings: Number,
    wasLiked: Boolean,
    superhost: Boolean,
  }
```
## Update (PUT Request)

  /places/?id=#

```sh
  {
    id: Number,
    image: Array of strings,
    description: String,
    title: String,
    rate: Number,
    avgRating: Number,
    numberOfRatings: Number,
    wasLiked: Boolean,
    superhost: Boolean,
  }
```

## Delete (DELETE Request)

  /places/?id=#

```sh
  {id : Number}
```

