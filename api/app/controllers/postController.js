'use strict';

var mongoose = require('mongoose'),
  Post = mongoose.model('Post'),
  User = mongoose.model('User');

exports.index = function(req, res) {
  var posts = Post.find({}).populate('user');
  if(req.query.make) posts.where('make').equals({ $regex: new RegExp("^" + req.query.make.toLowerCase().replace(' ', '-'), "i") });
  if(req.query.model) posts.where('model').equals({ $regex: new RegExp("^" + req.query.model.toLowerCase().replace(' ', '-'), "i") });
  if(req.query.minYear) posts.where('year').gte(req.query.minYear);
  if(req.query.maxYear) posts.where('year').lte(req.query.maxYear);
  if(req.query.minPrice) posts.where('price').gte(req.query.minPrice);
  if(req.query.maxPrice) posts.where('price').lte(req.query.maxPrice);
  posts.exec(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.show = function(req, res) {
  Post.findById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  }).populate('user');
};

exports.create = function(req, res) {
  var new_post = new Post(req.body);
  new_post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.update = function(req, res) {
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.delete = function(req, res) {
  Post.remove({
    _id: req.params.postId
  }, function(err, post) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
