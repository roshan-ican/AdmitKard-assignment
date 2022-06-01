// Middlewares can
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
const route = require('./routes/userRoute');

var bodyParser = require('body-parser');
const User = require('./modals/userModel');

const { collection } = require('./modals/userModel');
const { ObjectId } = require('mongodb');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// //Import Routes
// const postRoute = require('./routes/userRoute');
// app.use('/posts', postRoute);
// Routes
app.post('/email', (req, res) => {
  const email = req.body.email;
  console.log(email, 'email retrived');
  User.find({ email: email }, (err, doc) => {
    console.log(doc, 'doc fetched');
    res.status(200).json(doc);
  });
});

// connect to the database
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log('Database connection successful!'));

app.get('/test', (req, res) =>
  res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food'])
);
app.listen(5000, function () {
  console.log('Express server is running on port 5000');
});

app.use('/', route);
