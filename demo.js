var pins = require('./pins.js');

var async = require('async');
var argv = require('optimist').argv

// var pins = [11, 15, 16, 13, 22, 18];

var actions = {

  write: function(callback) {

    var opts = [
      {
        pin: 11,
        value: true
      }
    ]

    pins.write(opts, function(err, data) {
      return callback(err, data);
    });

  },

  read: function(callback) {

    var opts = [11];

    pins.read(opts, function(err, data) {
      return callback(err, data);
    });

  }

};

async.series(actions, function(err, results) {

  if (err) {
    return console.log(err);
  }

  return console.log(results);

});

