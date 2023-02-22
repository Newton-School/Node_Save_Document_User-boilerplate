/* userSchema should contain
  username-required,
  email-required-unique,
  passwoed-required,
  age-required-type:Number*/

// User Model
const mongoose = require('mongoose');
const { response } = require('express');

const userSchema = new mongoose.Schema(
  //Create a user model here
  {}
);

module.exports = mongoose.model('User', userSchema);
