const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose')
const registration = require('./src/routes/registration');
const bodyparser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/registration').then(() => {
  console.log('Connected to MongoDB');
  let server = app.listen(3000, () => {
    console.log(`Listening to port 3000`);
  });
});
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions ={
  origin:'http://localhost:3001', 
  credentials:true,            
  optionSuccessStatus:200,
  allowedHeaders: ['Content-Type','Authorization','x-csrf-token'],
}
app.use(cors(corsOptions));
app.use('/reg',registration);
app.use('/',(req,res)=>{
  res.send("home page");
})

