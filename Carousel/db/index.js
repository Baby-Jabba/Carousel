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
module.exports = {
  connection: connection,
  getPhotos: getPhotos
}
