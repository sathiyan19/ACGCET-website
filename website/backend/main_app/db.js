const mysql2 = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Badminton19@',
    database: 'clgdata'
  };

  const pool= mysql2.createPool(dbConfig).promise()


  module.exports=pool