const faker = require('faker');
const path = require('path');
const db = require('./index.js');
const Promise = require('bluebird');

const imgUrl = 'https://hrr43teamhan.s3-us-west-1.amazonaws.com/'
// + num.jpg

// We'll test it at 50k
let count = 0;
let max = 3000;

generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const t1 = Date;

let tags = ['Favorites', 'Dining', 'Room/Suite']

let insert = async (param) => {
  await db.connection.query(`INSERT INTO carousel (room_name, img_url, img_description, tag) VALUES (?, ?, ?, ?)`, param, (err, result) => {
    if (err) {
      // console.log(`Error inserting planet with id of ${id}`)
      // console.log(`${id}, ${randomImg}`);
    } else {
      count++
      console.log('added to the DB',count)
      const t1 = new Date;
      console.log(t1 - t0);
      if(count < max){
        seeding()
      }
    }
  })
}


const t0 = new Date;


// pass more arguments
var seeding = function () {
  for (let instance = 1; instance <= 10; instance++) {
    for (let imgs = 1; imgs <= 20; imgs++) {
      let randomTag = tags[generateRandomNum(0, 2)]
      let randomImg = imgUrl + generateRandomNum(1, 50) + '.jpg'
      let randomDesc = faker.lorem.sentence()
      insert([instance, randomImg, randomDesc, randomTag]);
      //return
    }
  }
}

seeding()

//50k will not run
//40k will not run
//30k will not run
//25k will not run
//20k might be the best option



// let insertAsync = Promise.promisify(insert)

// const t0 = new Date;

//   for (let instance = 1; instance <= 20000; instance++) {
//     for (let imgs = 1; imgs <= 20; imgs++) {
//       // console.log(instance, imgs);
//       let randomTag = tags[generateRandomNum(0, 2)]
//       let randomImg = imgUrl + generateRandomNum(1, 50) + '.jpg'
//       let randomDesc = faker.lorem.sentence()
//       insert([instance, randomImg, randomDesc, randomTag]);
//       // what you want: line 41 finishes and only after it finishes you go back to line 37
//     }
//   }