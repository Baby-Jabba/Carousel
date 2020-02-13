const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || undefined,
  database: 'HRR43_FEC'
})
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as as ' + connection.threadId)
});

const getPhotos = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM carousel WHERE room_name=?', [id], (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

const postQ = 'INSERT INTO carousel (room_name, img_url, img_description, tag) VALUE (?, ?, ?, ?)';

// this is not correct, basic idea
  // what goes inside the function
const postPhoto = (room_name, img_url, img_description, tag) => {
  return new Promise((resolve, reject) => {
    connection.query( postQ , [room_name, img_url, img_description, tag], (err, data) => {
      if (err) {
        console.log('there is an error in the post photo', err)
        reject(err);

      } else {
        console.log('successfully posted photos')
        resolve(data);
      }
    })
  })
}


const deleteQ = 'DELETE FROM carousel WHERE id=?'

const deletePhoto = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(deleteQ, [id], (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log('Deleted rows')
        resolve(data);
      }
    })
  })
}

const updateQ = 'UPDATE carousel SET(room_name, img_url, img_description, tag) VALUE(?,?,?,?) WHERE (id) value(?)';

const updatePhoto = (id, room_name, img_url, img_description, tag ) => {
  return new Promise((resolve, reject) => {
    connection.query(updateQ, [id, room_name, img_url, img_description, tag], (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Update the information of ${id}`)
        resolve(data);
      }
    })
  })

}


module.exports = {
  connection: connection,
  getPhotos: getPhotos,
  postPhoto: postPhoto,
  deletePhoto: deletePhoto,
  updatePhoto: updatePhoto
}
