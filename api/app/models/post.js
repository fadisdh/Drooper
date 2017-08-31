'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  make: {
    type: String,
    required: 'make is required'
  },
  model: {
    type: String,
    required: 'model is required'
  },
  year: {
    type: Number,
    required: 'year is required'
  },
  image: {
    type: String,
    required: 'image is required'
  },
  images: {
    type: [String]
  },
  price: {
    type: Number,
    required: 'price is required'
  },
  city: {
    type: String,
    required: 'city is required'
  },
  country: {
    type: String,
    required: 'city is required'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'active'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Post', PostSchema);
