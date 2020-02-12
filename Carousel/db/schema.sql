CREATE DATABASE IF NOT EXISTS HRR43_FEC;
USE HRR43_FEC;



DROP TABLE IF EXISTS HRR43_FEC.carousel;

CREATE TABLE `carousel` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `room_name` MEDIUMTEXT NOT NULL,
  `img_url` varchar(255),
  `img_description` varchar(255),
  `tag` varchar(255),
  PRIMARY KEY (`id`)
);