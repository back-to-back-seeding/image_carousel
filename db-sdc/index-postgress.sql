-- postgreSQL database schema

DROP DATABASE IF EXISTS moreplaces;
CREATE DATABASE moreplaces;
-- USE morePlaces;

CREATE TABLE places (
  id INT NOT NULL,
  rating DECIMAL(3, 2) NOT NULL,
  numOfReviews INT,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(150),
  rates INT,
  superHost BOOL,
  photo varchar(300),
  PRIMARY KEY (id)
  -- CHECK (rating>=0 AND rating <= 5),
  -- CHECK (numOfReviews >=0),
  -- CHECK (rates >=0)
);

CREATE TABLE relatedplaces (
  id INT NOT NULL,
  ref_placeId INT NOT NULL
);
--might not need
CREATE TABLE users (
  id INT NOT NULL,
  folder VARCHAR(20) NOT NULL,
  saved_placeId INT
);
-----------------------------------------------------------

-- ALTER TABLE relatedPlaces ADD CONSTRAINT current_placeIds
--   FOREIGN KEY (id)
--   REFERENCES places (id);

-- ALTER TABLE relatedPlaces ADD CONSTRAINT related_placeIds
--   FOREIGN KEY (ref_placeId)
--   REFERENCES places (id);

-- ALTER TABLE users ADD CONSTRAINT saved_placeds
--   FOREIGN KEY (saved_placeId)
--   REFERENCES places (id);

-- join all table
-- select * from table users join table places where ...