const pool = require("./db.js");
const exceljs = require('exceljs');

const get_Tables=async(req,res)=>{
    try {
      const [tables]=await pool.query("show tables");
      const key = Object.keys(tables[0])[0];
      const tableNames = tables.map(item => item[key]);
      // console.log(tableNames)
      res.status(200).send(tableNames)
    } catch (error) {
      console.log(error)
      res.status(400).send("server error")
    }
}

const excel_to_SQL=async(req, res) => {
    console.log(req.body.table_name)
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }
  
    const workbook = new exceljs.Workbook();
    workbook.xlsx.load(req.file.buffer)
      .then(async () => {
        const worksheet = workbook.getWorksheet(1);
        const rows = [];
  
        // Iterate over rows and extract data
        worksheet.eachRow((row, rowNumber) => {
          console.log(row.values)
          if (rowNumber !== 1) { // Skip header row
            const rowData = row.values.slice(1);
            rows.push(rowData);
          }
        });
  
        // Insert rows into MySQL database
        const sql = 'INSERT into ?? VALUES ?';
        const trial=await connection.query(sql, [req.body.table_name,rows],);
        console.log(trial)
        res.status(200).send("successful")
      })
      .catch(error => {
        console.error('Error reading Excel file: ', error);
        res.status(500).send('Error reading Excel file.');
      });
  }



module.exports={
    get_Tables,
    excel_to_SQL
}