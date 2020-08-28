# CRUD API Routes

> API routes and data shapes


## Create (POST Request)

  #### expect request in body with JSON format
  POST /places

  success status code: 201

  post body for one new place:

```js
  {
    id: "Number",
    description: "String",
    title: "String",
    rate: "Number",
    avgRating: "Number",
    numberOfRatings: "Number",
    saved: "Boolean",
    superhost: "Boolean",
    photo: "String",
    morePlacesId: ["Number"]
  }
```


## Read (GET Request)

  #### Get the place with id specified
  GET /places/:placeId

  Path parameter: placeId

  success status code: 200

```js
  {
    id: "Number",
    description: "String",
    title: "String",
    rate: "Number",
    avgRating: "Number",
    numberOfRatings: "Number",
    saved: "Boolean",
    superhost: "Boolean",
    photo: "String",
    morePlacesId: ["Number"]
  }
```


## Update (PUT Request)

  #### expect request in body with JSON format
  UPDATE /places/:placeId

  Path parameter: placeId

  success status code: 204

```js
  {
    photo: "String",
    description: "String",
    title: "String",
    rate: "Number",
  }
```

## Delete (DELETE Request)

  #### Delete by id number as path parameter
  /places/:placeId

  Path parameter: placeId

  success status code: 204


