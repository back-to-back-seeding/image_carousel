# CRUD API Routes

> API routes and data shapes

## Create (POST Request)

  POST /places
  # information will live the body somewhere in JSON format: {"key1": value1, "key2": value2}


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

  GET /places
  # Get all places

  GET /places/?id=500
  # Get the place with id 500

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

  UPDATE /places
  # in the body somewhere in JSON format: {"key1": value1, "key2": value2}

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
  # Delete by id number

```sh
  {id : Number}
```

