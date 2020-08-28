# CRUD API Routes


## Create a new place (POST Request)

  #### expect request in body with JSON format
  POST ```/places```

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


## Read an existing place (GET Request)

  #### Get the place with id specified
  GET ```/places/:placeId```

  Path parameter: ```placeId```

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


## Update an existing place (PUT Request)

  #### expect request in body with JSON format
  UPDATE  ```/places/:placeId```

  Path parameter: ```placeId```

  success status code: 204

```js
  {
    photo: "String",
    description: "String",
    title: "String",
    rate: "Number",
  }
```

## Delete an existing place (DELETE Request)

  #### Delete by id number as path parameter
  DELETE ```/places/:placeId```

  Path parameter: ```placeId```

  success status code: 204


