/*
#######################################
############# PostgresSQL #############
#######################################
*/

//example to create a client with specific connection information:
const { Client } = require('pg')


const clientSQL = new Client({
  user: 'alexavila', //!well find out
  host: 'localhost',
  database: 'sdc',
  password: '',
  port: 5432
})

clientSQL.connect(err => {
  if (err) {
    console.error('PostgresSQL connection error', err)
  } else {
    console.log('Successfully connected to PG 🤟')
  }
})


const getQ = 'SELECT * FROM hotels WHERE id=?'

const getPhotosPG = (id, cb) => {
  clientSQL.query(`SELECT * FROM carousel WHERE room_name=$1`,[id], (err, results) => {
      if (err){
        console.log('theres an error in the get photos')
        cb(err, null)
      } else {
        console.log('Successfully accessed the photos from PG!')
        //we care about the rows!
        cb(null, results.rows);
      }
    }
  );
};




//-----------PostgresSQL------------------
module.exports = {
  getPhotosPG: getPhotosPG
}