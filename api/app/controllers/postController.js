'use strict';

var mongoose = require('mongoose'),
  fs = require('fs'),
  Post = mongoose.model('Post'),
  User = mongoose.model('User'),
  image = require('../helpers/image');

exports.index = function(req, res) {
  var posts = Post.find({}).populate('user');
  if(req.query.make) posts.where('make').equals({ $regex: new RegExp("^" + req.query.make.toLowerCase().replace(' ', '-'), "i") });
  if(req.query.model) posts.where('model').equals({ $regex: new RegExp("^" + req.query.model.toLowerCase().replace(' ', '-'), "i") });
  if(req.query.minYear > 0) posts.where('year').gte(req.query.minYear);
  if(req.query.maxYear > 0) posts.where('year').lte(req.query.maxYear);
  if(req.query.minPrice) posts.where('price').gte(req.query.minPrice);
  if(req.query.maxPrice) posts.where('price').lte(req.query.maxPrice);
  posts.limit(10);
  posts.sort({ updated_at: -1 });
  posts.exec(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

exports.myPosts = function(req, res) {
  var posts = Post.find({ user : req.user}).populate('user');
  posts.sort({ updated_at: -1 });
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
  console.log('Create: ', req.user);
  var newPost = new Post(req.body);

  var dir = 'public/images/' + newPost._id + '/';
  var url_prefix = 'images/' + newPost._id + '/';

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  console.log(req.files);
  if(req.files.bodyReport) {
    newPost.bodyReport = image.resize(req.files.bodyReport[0], dir, url_prefix);
  }

  if(req.files['images[]']){
    newPost.images = [];
    for(var i = 0; i < req.files['images[]'].length; i++){
      newPost.images[i] = image.resize(req.files['images[]'][i], dir, url_prefix);
    }
  }

  newPost.user = req.user;

  newPost.save(function(err, post) {
    if (err) res.send(err);
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
