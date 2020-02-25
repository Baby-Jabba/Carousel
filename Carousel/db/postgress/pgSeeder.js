var faker = require('faker');
const { Pool, Client} = require('pg');

const client = new Client({
  user: 'postgres',
  database: 'sdc',
  password: 50002,
  port: 5432
});

// const sdcClient = new Client({
//   user: 'postgres',
//   database: 'sdc',
//   password: 50002,
//   port: 5432
// });

client
  .connect()
  .then(() => {
    console.log('connected succesfully to postgresSQL 🤟');
    // return client.query('DROP DATABASE IF EXISTS sdc3');
  })
  // .then(() => {
  //   return client.query('CREATE DATABASE sdc3');
  // })
  // .then(() => {
  //   console.log('database sdc3 created!!💪');
  //   return client.end();
  // })
  // .then(() => {
  //   return sdcClient.connect();
  // })
  // .then(() => {
  //   console.log('connected to database sdcClient');
  //   return sdcClient.query(
  //     `CREATE TABLE carousel (
  //       id SERIAL PRIMARY KEY NOT NULL,
  //       room_name TEXT NOT NULL,
  //       img_url VARCHAR(255),
  //       img_description VARCHAR(255),
  //       tag VARCHAR(100)
  //     )`
  //   );
  // })
  .then(() => {
    console.log('Picture Carousel created! ✅');
    //change it to 2mill per run
    return makeCarouselDB(500000);
  })
  .catch(err => {
    console.log('there was an error, check SEEDER', err);
  });


const makeCarouselDB = (num) => {

  const imgUrl = 'https://hrr43babyyoda.s3-us-west-1.amazonaws.com/'
  // + num.jpg

  // We'll test it at 50k
  let count = 0;
  // let max = 3000;

  generateRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const t1 = Date;

  let tags = ['Favorites', 'Dining', 'Room/Suite']

  let insert = async (param) => {
    await client.query(`INSERT INTO carousel (room_name, img_url, img_description, tag) VALUES ($1,$2, $3, $4)`, param, (err, result) => {
      if (err) {
        // console.log(`${id}, ${randomImg}`);
        console.log('error inserting to the PG!')
      } else {
        count++
        console.log('added to the DB',count)
        const t1 = new Date;
        console.log(t1 - t0);
      }
    })
  }


  const t0 = new Date;


  // pass more arguments
  var seeding = function () {
    for (let instance = 1; instance <= num; instance++) {
      for (let imgs = 1; imgs <= 20; imgs++) {
        let randomTag = tags[generateRandomNum(0, 2)]
        let randomImg = imgUrl + generateRandomNum(1, 100) + '.jpg'
        let randomDesc = faker.lorem.sentence()
        insert([instance, randomImg, randomDesc, randomTag]);
        //return
      }
    }
  }

  seeding()

}







// const makeDataBase = (sitesNumber, hotelsNumber) => {
//   let daysAdded = 0;

//   const sites = sitesNumbers => {
//     for (let index = 0; index < sitesNumbers; index++) {
//       let siteName = `${faker.company.catchPhraseAdjective()}.com`;
//       let logo = faker.image.cats();
//       let tweak = faker.finance.amount(0.8, 1, 2);
//       let incentive = faker.random.number({
//         min: 0,
//         max: 2
//       });
//       let params = [siteName, logo, tweak, incentive];
//       client
//         .query(
//           'INSERT INTO sites(site_name, logo, tweak, incentive) VALUES($1,$2,$3,$4)',
//           params
//         )
//         .then(res => {
//           console.log(`${index}sites added;`);
//         })
//         .catch(e => console.error(e.stack));
//     }
//   };

//   const hotels = hotelsNumbers => {
//     for (let index = 0; index < hotelsNumbers; index++) {
//       const standardRate = faker.random.number({
//         min: 200,
//         max: 1200
//       });
//       const adultPremium = faker.finance.amount(0.1, 0.2, 2);
//       const childPremium = faker.finance.amount(0.05, 0.1, 2);
//       const maxStay = faker.random.number({
//         min: 14,
//         max: 28
//       });
//       const deal =
//         faker.random.number({
//           min: 1,
//           max: 10
//         }) > 4 ?
//         faker.lorem.sentence((word_count = 2)) :
//         '';

//       const params = [standardRate, adultPremium, childPremium, maxStay, deal];
//       client
//         .query(
//           'INSERT INTO hotels(standard_rate, adult_premium, child_premium, max_stay, deal) VALUES($1,$2,$3,$4,$5)',
//           params
//         )
//         .then(res => console.log(`${index} hotels added;`))
//         .catch(e => console.error(e.stack));
//     }
//   };

//   seedDates = () => {
//     let datePremium = faker.finance.amount(0.6, 1.5, 2);

//     let params = [datePremium];

//     client.query(
//       'INSERT INTO dates (date_premium) VALUES ($1)',
//       params,
//       (err, results) => {
//         if (err) {
//           console.log(
//             `ERROR! There was an error adding a day with an id of ${daysAdded +
//               1} to the dates table`
//           );
//         } else {
//           daysAdded++;
//           console.log(
//             `SUCCESS! Added a day with an id of ${daysAdded} to the dates table`
//           );
//           if (daysAdded < 366) {
//             seedDates();
//           }
//         }
//       }
//     );
//   };

//   sites(sitesNumber);
//   hotels(hotelsNumber);
//   seedDates();
// };