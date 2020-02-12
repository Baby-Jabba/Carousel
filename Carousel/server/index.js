const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bundle.js', express.static(`${__dirname}/../public/bundle.js`));
// app.use('/:id', express.static('./public'));
app.use('/:id', express.static(__dirname + '/../public'));

app.get('/api/carousel/:id', (req, res) => {
  db.getPhotos(req.params.id)
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