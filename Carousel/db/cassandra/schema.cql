DROP KEYSPACE [IF EXISTS] sdc;

CREATE KEYSPACE sdc;

USE sdc;

CREATE TABLE carousel (
  id int,
  room_name text,
  img_url text,
  img_description text,
  tag text,
  PRIMARY KEY (id)
);


COPY carousel (id,room_name,img_url,img_description,tag)
FROM '/Users/alexavila/Documents/HRR-43 SR Phase/Carousel/Carousel/db/cass_pics_data.csv';

