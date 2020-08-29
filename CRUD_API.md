# CRUD API Routes


## Create a new place (POST Request)

  #### expect request in body with JSON format
  POST ```/places```


  post body for one new place:

```js
  {
    placeId: "Number",
    description: "String",
    title: "String",
    rate: "Number",
    avgRating: "Number",
    numberOfRatings: "Number",
    superhost: "Boolean",
    photo: "String",
    morePlacesId: "Number"
  }
```
  add to user's saved list

  POST ```/users/:id/```

  Path parameter: ```id```

```js
  {
    saved_placeId: "Number"
  }
```
  success status code: 201


## Read an existing place (GET Request)

  #### Get the place with id specified
  GET ```/places/:id```

  Path parameter: ```id```


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
  GET ```/users/:id/```

  Path parameter: ```id```

  success status code: 200


## Update an existing place (PUT Request)

  #### expect request in body with JSON format
  UPDATE  ```/places/:placeId```

  Path parameter: ```placeId```

```js
  {
    photo: "String",
    description: "String",
    title: "String",
    rate: "Number",
  }
```
  success status code: 204


## Delete an existing place (DELETE Request)

  #### Delete by id number as path parameter
  DELETE ```/places/:id```

  Path parameter: ```id```


  DELETE ```/users/:id```

  Path parameter: ```id```

```js
  {
    deleted_placeId: "Number"
  }
```
  success status code: 204
