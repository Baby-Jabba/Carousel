/*
 _____ _____ ____ _____    ___  _   _ _____
|_   _| ____/ ___|_   _|  / _ \| \ | | ____|
  | | |  _| \___ \ | |   | | | |  \| |  _|
  | | | |___ ___) || |   | |_| | |\  | |___
  |_| |_____|____/ |_|    \___/|_| \_|_____|


*/
// const faker = require('faker');
// const fs = require('fs');

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: 'example.csv',
//   header: [
//     {id: 'id', title: 'id'},
//     {id: 'room_name', title: 'room_name'},
//     {id: 'img_url', title: 'img_url'},
//     {id: 'img_description', title: 'img_description'},
//     {id: 'tag', title: 'tag'},
//   ]
// });


const amazonImgUrl = 'https://hrr43babyyoda.s3-us-west-1.amazonaws.com/'


generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tags = ['Favorites', 'Dining', 'Room/Suite']




// csvWriter
//   .writeRecords(data)
//   .then(()=> console.log('The CSV file was written successfully'));



/*
            _               _   _            _
  __ _  ___| |_ _   _  __ _| | | |_ ___  ___| |_
 / _` |/ __| __| | | |/ _` | | | __/ _ \/ __| __|
| (_| | (__| |_| |_| | (_| | | | ||  __/\__ \ |_
 \__,_|\___|\__|\__,_|\__,_|_|  \__\___||___/\__|

*/

const path = require('path')
const fs = require('fs');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// this is the number that we are going to be using as the max
// let max = 10

const t1 = Date;


const createPicsData = (total, encoding) => {


  const picsDataWS = fs.createWriteStream(path.join(__dirname, './small_pg.csv'));

  //keep track of the ID
  let id = 0;
  let i = total;
  let counter = 0;

  function createCSV() {

    //given
    let ok = true;

    do {
      //increase the ID
      id += 1;
      //count decreases
      i -= 1;

      //import my old variables
      //!note I need to add 20 per instance
      let room_name;
      let randomTag;
      let randomImg;
      let randomDesc;


      room_name = id;

      // the seeding loop we used to create 20 pics per instance
        //? might need to optimize to use faker

      for (let imgs = 1; imgs <= 20; imgs++) {
        // counter++;
        randomTag = tags[generateRandomNum(0, 2)]
        randomImg = amazonImgUrl + generateRandomNum(1, 100) + '.jpg'
        randomDesc = faker.lorem.sentence()

        // the data that is getting passed correctly!🤟
        const data = `${room_name},${randomImg},${randomDesc},${randomTag}\n`

        // EL FINAL, gracias por tu ayuda!
        if (i === 0) {

          picsDataWS.end();
          const t1 = new Date
          console.log('running time', t1 - t0)
          //continues
        } else {
          ok = picsDataWS.write(data, encoding);
        }
      }



      // the process will continue until i reaches zero
    } while (i > 0 && ok);
    if (i > 0) {

      picsDataWS.once('drain', createCSV);
    }
  }

  // invoke the function
  createCSV();

  //check time
  // const t1 = new Date
  // console.log('running time', t1 - t0)

};

const t0 = new Date
// console.log('running time', t1 - t0)


//need to add '1' to the quantity
//! 10 MILLION
createPicsData(100 + 1, 'utf-8');
