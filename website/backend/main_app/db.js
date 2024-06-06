const mysql2 = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    // password: 'kint',
    // password: 'Sep14@23',
    // password: 'Badminton19@',
    password: 'kaviya',
    // password: 'root',
    // password:'1988',
    database: 'clgdata'
  };

  const pool= mysql2.createPool(dbConfig).promise()


  module.exports=pool