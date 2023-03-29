const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDB = require('./db');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

// start express server
const app = express();

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

// connect to DB
connectToDB();

// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    mongoUrl: process.env.mongo_url,
    store: MongoStore.create(mongoose.connection),
  })
);

// serve static files from React App
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/uploads/')));

// add routes
app.use('/api', require('./routes/ads.routes'));
app.use('/auth', require('./routes/auth.routes'));

// at any other link just serve React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});





