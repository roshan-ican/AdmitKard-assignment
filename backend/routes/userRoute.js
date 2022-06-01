const express = require('express');
const router = express.Router();
const User = require('../modals/userModel');

router.route('/user').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const mobileNumber = req.body.mobileNumber;
  const courseLevel = req.body.courseLevel;
  const countries = req.body.countries;
  const dob = req.body.dob;
  const schemaData = {
    firstName,
    lastName,
    email,
    mobileNumber,
    courseLevel,
    countries,
    dob,
  };
  console.log(schemaData, 'schemaData');
  const newUser = new User(schemaData);
  newUser
    .save()
    .then((doc) => console.log(doc, 'schema save'))
    .catch((err) => console.log(err, 'schema error'));
});

module.exports = router;
