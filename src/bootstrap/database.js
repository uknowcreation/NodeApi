const mongoose = require('mongoose');

// Connect tot Database
mongoose.connect(
  'mongodb+srv://' + process.env.DB_USERNAME + ':'+ process.env.DB_PASSWORD + '@cluster0-kachx.mongodb.net/test?retryWrites=true&w=majority',
  { userNewUrlParser: true },
  () => console.log('Connect to Db');
);
