const faker = require('faker');
const path = require('path');
const db = require('./index.js');
const Promise = require('bluebird');

const imgUrl = 'https://hrr43teamhan.s3-us-west-1.amazonaws.com/'
// + num.jpg


generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




let tags = ['Favorites', 'Dining', 'Room/Suite']

let insert = (param) => {
  db.connection.query(`INSERT INTO carousel (room_name, img_url, img_description, tag) VALUES (?, ?, ?, ?)`, param, (err, result) => {
    if (err) {
      console.log(`Error inserting planet with id of ${id}`)
      // console.log(`${id}, ${randomImg}`);
    }
    else {
      console.log('Success!')
    }
  })
}

let insertAsync = Promise.promisify(insert)


  for (let instance = 1; instance <= 100; instance++) {
    for (let imgs = 1; imgs <= 20; imgs++) {
      let randomTag = tags[generateRandomNum(0, 2)]
      let randomImg = imgUrl + generateRandomNum(1, 50) + '.jpg'
      let randomDesc = faker.lorem.sentence()
      insertAsync([instance, randomImg, randomDesc, randomTag]);
    }
  }




  // let hotelsAdded = 0
  // let photosAdded = 0

  // let seed = () => {
  //   db.connection.query(`INSERT INTO media (room_name, img_url, img_description, tag) VALUES (${hotelsAdded + 1}, ${randomImg}, 'test', 'test')`, (err, result) => {
  //     if (err) {
  //       console.log(`Error in adding hotel with id ${hotelsAdded + 1}`)
  //       db.end();
  //     }
  //     else {
  //       hotelsAdded++
  //       console.log(`successfully added hotel with id ${hotelsAdded + 1}`)
  //       if (hotelsAdded < 100) {
  //         seed();
  //       }
  //     }
  //   })
  // }

  // seed();
  // // process.exit(0);


  // only generating random images of 10 as I only have 10 images downloaded






