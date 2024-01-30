const express = require('express');
const body_parser=require('body-parser');

const app_utils = express();
app_utils.use(body_parser.json());
const port_utils = 5001;

// const app_main = express();
// app_main.use(body_parser.json());
// const port_main = 5002;

const app_utils_Routes = require('./utils_app/routes.js');

// const app_main_Routes = require('./main_app/routes.js');

app_utils.use('/',app_utils_Routes)

// app_main.use('/',app_main_Routes)

app_utils.listen(port_utils, () => {
    console.log(`Server is running on port ${port_utils}`);
  });