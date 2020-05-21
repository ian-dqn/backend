const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./controllers/user');
//const userRoutes = require('./routes/utils');

require('dotenv').config();

const app = express();
mongoose.connect('mongodb+srv://*********@***********.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('MongoDB conection succeed'))
  .catch(() => console.log('MongoDB conection failed !'))

app.use((req, res, next) => {
/*
**Access API from '*'(all)
*/
  res.setHeader('Acces-Control-Allow-Origin', '*');
/*
**add mentioned header to the API
*/
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
/*
**Send request with mentioned method
*/
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
next();
});

app.use(bodyParser.json());

//app.use('api/stuff', stuffRoutes);
app.use('/user', userRoutes);

module.exports = app;
