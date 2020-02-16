/*
 _____ _____ ____ _____    ___  _   _ _____
|_   _| ____/ ___|_   _|  / _ \| \ | | ____|
  | | |  _| \___ \ | |   | | | |  \| |  _|
  | | | |___ ___) || |   | |_| | |\  | |___
  |_| |_____|____/ |_|    \___/|_| \_|_____|


*/

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'name', title: 'Name'},
    {id: 'surname', title: 'Surname'},
    {id: 'age', title: 'Age'},
    {id: 'gender', title: 'Gender'},
  ]
});

const data = [
  {
    name: 'John',
    surname: 'Snow',
    age: 26,
    gender: 'M'
  }, {
    name: 'Clair',
    surname: 'White',
    age: 33,
    gender: 'F',
  }, {
    name: 'Fancy',
    surname: 'Brown',
    age: 78,
    gender: 'F'
  }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));



/*
            _               _   _            _
  __ _  ___| |_ _   _  __ _| | | |_ ___  ___| |_
 / _` |/ __| __| | | |/ _` | | | __/ _ \/ __| __|
| (_| | (__| |_| |_| | (_| | | | ||  __/\__ \ |_
 \__,_|\___|\__|\__,_|\__,_|_|  \__\___||___/\__|

*/




// const fs = require('fs');
// const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//     path: 'path/to/file.csv',
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'lang', title: 'LANGUAGE'}
//     ]
// });

// const records = [
//     {name: 'Bob',  lang: 'French, English'},
//     {name: 'Mary', lang: 'English'}
// ];

// csvWriter.writeRecords(records)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });


