const express = require('express');
const body_parser=require('body-parser');
const cookieParser = require('cookie-parser');
const cors=require('cors')

// const app_utils = express();
// app_utils.use(body_parser.json());
// app_utils.use(cors())
// const port_utils = 5001;

const app_main = express();
app_main.use(cookieParser());
app_main.use(body_parser.json());

//--------------changes-----------------
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
app_main.use(cors(corsOptions))
//--------------changes-----------------
const port_main = 5002;

// const app_utils_Routes = require('./utils_app/routes.js');

const app_main_Routes = require('./main_app/routes.js');

// app_utils.use('/',app_utils_Routes)

app_main.use('/',app_main_Routes)

// app_utils.listen(port_utils, () => {
//     console.log(`Server is running on port ${port_utils}`);
//   });

app_main.listen(port_main, () => {
    console.log(`Server is running on port ${port_main}`);
  });