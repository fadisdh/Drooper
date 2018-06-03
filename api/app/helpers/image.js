'use strict';

var fs = require('fs'),
    gm = require('gm');

exports.resize = function(file, dir, prefix){
  gm(file.path)
  .resize(300, 225, '^')
  .gravity('Center')
  .crop(300, 225)
  .write(dir + file.filename + '-small.jpg', function(err){
    if(err) console.log(err);
  });

  gm(file.path)
  .resize(900, 675, '^')
  .gravity('Center')
  .crop(900, 675)
  .noProfile()
  .write(dir + file.filename + '-large.jpg', function(err){
    if(err) console.log(err);
  });

  return {
    small: prefix + file.filename + '-small.jpg',
    large: prefix + file.filename + '-large.jpg'
  }
}
