'use strict';

var jwt = require('jsonwebtoken'),
    config = require('../config'),
    User = require('../models/user');

exports.login = function(email, password, callback) {
  User.findOne({
    email: email
  }, function(err, user) {
    console.log(user);
    if(err || !user || user.password != password){
      callback(false);
      return;
    }

    var token = jwt.sign({ user: user }, config.secret, {
      expiresIn: 60*60*24
    });
    callback(token, user);
  });
}

exports.check = function(token, callback) {
  jwt.verify(token, config.secret, function(err, decoded) {
    if(err) {
      return callback(false);
    }else{
      return callback(decoded.user);
    }
  });
}

exports.is = function(checker) {
  if(!checker) checker = function() { return true };

  return function(req, res, next) {
    exports.check(req.headers['x-access-token'], function(user){
      if(user && checker(user)){
        req.user = user;
        next();
      }else{
        res.status(400).send({ error: 'No Permission' });
      }
    });
  };
}

exports.isUser = exports.is();
exports.isAdmin = exports.is(function(user) {
  return user.admin;
});
