const mysql2 = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    // password: 'Sep14@23',
    password: 'root',
    database: 'clgdata'
  };

  const pool= mysql2.createPool(dbConfig).promise()


  module.exports=pool