const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: Number,
  courseLevel: String,
  countries: [{ value: String, label: String }],
  dob: Date,
});

const User = mongoose.model('human', Schema);
module.exports = User;
