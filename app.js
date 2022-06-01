const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');

// import routes
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());

app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to db');
});

// Middlewares

app.use(cors());

app.use('/posts', () => {
  console.log('This is a middleware running');
});

// ROUTES
app.get('/', (req, res) => {
  res.send('We are online');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

// start listening to the serve
app.listen(3000);
