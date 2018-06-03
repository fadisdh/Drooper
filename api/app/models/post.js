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
  color: {
    type: String,
    required: 'color is required'
  },
  bodyStyle: {
    type: String,
    required: 'color is required'
  },
  kilometers: {
    type: String,
    required: 'color is required'
  },
  origin: {
    type: String,
    required: 'color is required'
  },
  condition: {
    type: String,
    required: 'color is required'
  },
  engineType: {
    type: String,
    required: 'color is required'
  },
  cylender: {
    type: String,
    required: 'color is required'
  },
  transmission: {
    type: String,
    required: 'color is required'
  },
  driveType: {
    type: String,
    required: 'color is required'
  },
  technologyOptions: {
    type: [String]
  },
  exteriorOptions: {
    type: [String]
  },
  interiorOptions: {
    type: [String]
  },
  saftyOptions: {
    type: [String]
  },
  images: {
    type: [Schema.Types.Mixed]
  },
  bodyReport: {
    type: Schema.Types.Mixed
  },
  bodyCondition: {
    type: Schema.Types.Mixed
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
    default: 'Jordan',
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
  title: {
    type: String,
    required: 'title is required'
  },
  notes: {
    type: String,
    required: 'notes is required'
  },
  phone: {
    type: String,
    required: 'phone is required'
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
