const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');
const express = require('express');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/api/upload', upload.single('excelFile'), (req, res) => {
    try {
      const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Convert JSON data to a JavaScript file content
      const jsFileContent = `const jsonData = ${JSON.stringify(jsonData, null, 2)};`;

      // Save the JavaScript file
      fs.writeFileSync('output.txt', jsFileContent);

      res.download('output.txt', 'output.txt', (err) => {
          if (err) {
              res.status(500).json({ error: 'Error generating JavaScript file' });
          } else {
              // Optionally, you can delete the generated file after download
              res.status(200);
              fs.unlinkSync('output.txt');
          }
      });
    } catch (error) {
      console.log(error)
        res.status(500).json({ error: 'Error processing Excel file' });
    }
});

module.exports = router;