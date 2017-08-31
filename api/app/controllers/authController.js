'use strict';

var auth = require('../helpers/auth');

exports.login = function(req, res) {
  auth.login(req.body.email, req.body.password, function(token, user) {
    if(token) {
      res.send({ token: token, user: user });
    }
    else res.status(400).send({ error: 'Wrong email and/or password' })
  });
};
