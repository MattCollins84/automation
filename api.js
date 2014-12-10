var gpio = require('rpi-gpio');
var async = require('async');

var pins = [11, 15, 16, 13];
var actions = [];
var power = true;

gpio.setup(11, gpio.DIR_IN, function(err) {
  gpio.read(11, function(err, data) {
    return console.log(err, data);
  });
});

// for (var p in pins) {

//   (function(pin, power) {

//     actions.push(function(callback) {

//       gpio.setup(pin, gpio.DIR_OUT, function(err) {
//         gpio.write(pin, power, function() {
//           return callback(err, null);
//         });
//       });

//     });

//   })(pins[p], power);

// }

// async.parallel(actions, function(err, results) {

//   console.log("done!");

// });