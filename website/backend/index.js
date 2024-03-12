const express = require('express');
const body_parser=require('body-parser');
const cookieParser = require('cookie-parser');
const cors=require('cors')


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


const app_main_Routes = require('./main_app/routes.js');


app_main.use('/',app_main_Routes)

app_main.listen(port_main, () => {
    console.log(`Server is running on port ${port_main}`);
  });