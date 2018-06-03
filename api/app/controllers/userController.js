'use strict';

var mongoose = require('mongoose'),
    auth = require('../helpers/auth'),
    User = mongoose.model('User');

exports.index = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.status(400).json(err);
    res.json(user);
  });
};

exports.checkName = function(req, res) {
  User.findOne({ name: req.query.name }, function(err, user) {
    if (err || !user) res.json({ avaliable: true });
    else res.json({ avaliable: false });
  });
}

exports.checkEmail = function(req, res) {
  User.findOne({ email: req.query.email }, function(err, user) {
    if (err || !user) res.json({ avaliable: true });
    else res.json({ avaliable: false });
  });
}

exports.show = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.status(400).json(err);
    res.json(user);
  });
};

exports.create = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.status(400).json(err);

      auth.login(new_user.email, new_user.password, function(token, user) {
        if(token) {
          res.send({ token: token, user: user });
        }
        else res.status(400).send({ error: 'Wrong email and/or password' })
      });
  });
};

exports.update = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.status(400).json(err);
    res.json(user);
  });
};

exports.delete = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.status(400).json(err);
    res.json({ message: 'User successfully deleted' });
  });
};
