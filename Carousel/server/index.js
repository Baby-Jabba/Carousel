const nr = require('newrelic')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db/index.js');
const pg = require('../db/postgress/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bundle.js', express.static(`${__dirname}/../public/bundle.js`));
// app.use('/:id', express.static('./public'));
app.use('/:id', express.static(__dirname + '/../public'));

//! change this with PG
app.get('/api/carousel/:id', (req, res) => {
  pg.getPhotosPG(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send('error getting pictures');
      return;
    }
    console.log('Success! 🤟')
    res.status(200).json(data);
  });
  // .then((data) => {
  //   res.status(200).send(data);
  // })
  // .catch(err => {
  //   res.sendStatus(400).send({
  //     message:err.message
  //   })
  // })
})


app.post('/api/carousel/', function (req, res) {
  console.log('i am inside the post api request')
  //define the args
  let room_name = req.body.room_name;
  let img_url = req.body.img_url;
  let img_description = req.body.img_description;
  let tag = req.body.tag


  db.postPhoto(room_name, img_url, img_description, tag)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.sendStatus(400).send({
      message:err.message
    })
  })
})


app.delete('/api/delete/:id', function (req, res) {
  console.log('i am inside the delete api request')

  let id = req.params.id

  db.deletePhoto(id)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.sendStatus(400).send({
      message:err.messageclear
    })
  })
})


app.put('/api/carousel/', function (req, res) {
  console.log('i am inside the update[put] api request')
  //define the args
  let id = req.body.id;
  let room_name = req.body.room_name;
  let img_url = req.body.img_url;
  let img_description = req.body.img_description;
  let tag = req.body.tag

  db.updatePhoto(id, room_name, img_url, img_description, tag)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.sendStatus(400).send({
      message:err.message
    })
  })
})



app.listen(process.env.PORT || 50002, console.log(`Listening on port ${process.env.PORT || 50002}`))