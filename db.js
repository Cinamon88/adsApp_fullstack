const mongoose = require('mongoose');

const connectToDB = () => {
  // connect to DB
  const NODE_ENV = process.env.NODE_ENV;
  let dbUri = '';

  if (NODE_ENV === 'production') dbUri = process.env.mongo_url;
  else if (NODE_ENV === 'test')
    dbUri = 'mongodb://localhost:27017/adsDBtest';
  else dbUri = 'mongodb://localhost:27017/adsDB';

  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Connected to the database');
  });

  // on error
  db.on('error', (err) => console.log('Error ' + err));
};

module.exports = connectToDB;