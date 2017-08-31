'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateName = function(username) {
  var re = /^[A-Za-z0-9]+(?:[_\.][A-Za-z0-9]+)*$/;
  return re.test(username);
}

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

var validatePassword = function(password) {
  return password.length >= 6;
}

var UserSchema = new Schema({
  provider: {
    type: String,
    default: 'email'
  },
  name: {
    type: String,
    required: 'Kindly enter the name',
    validate: { validator: validateName, msg: 'Please fill a valid username' }
  },
  email: {
    type: String,
    required: 'Kindly enter the email',
    validate: { validator: validateEmail, msg: 'Please fill a valid email address' }
  },
  password: {
    type: String,
    required: 'Kindly enter a password',
    validate: { validator: validatePassword, msg: 'Please fill a valid password' }
  },
  phone: {
    type: String
  },
  image: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pending'
  },
  admin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);
