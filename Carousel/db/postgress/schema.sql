-- https://www.tutorialspoint.com/postgresql/postgresql_using_autoincrement.htm

DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

-- connects to the database
\c sdc;

CREATE TABLE carousel (
  id SERIAL PRIMARY KEY,
  room_name TEXT NOT NULL,
  img_url VARCHAR(255),
  img_description VARCHAR(255),
  tag VARCHAR(100)
);

-- gets the data into the postgresql
COPY carousel (room_name,img_url,img_description,tag)
FROM '/Users/alexavila/Documents/HRR-43 SR Phase/Carousel/Carousel/db/pics_data.csv' DELIMITER ',';