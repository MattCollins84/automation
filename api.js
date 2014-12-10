var gpio = require('rpi-gpio');
var async = require('async');
var argv = require('optimist').argv

var pins = [11, 15, 16, 13];
var actions = [];
var power = (argv.power?true:false);

console.log(power);

for (var p in pins) {

  (function(pin, power) {
    console.log(pin, power);
    actions.push(function(callback) {

      gpio.setup(pin, gpio.DIR_OUT, function(err) {
        gpio.write(pin, power, function() {
          return callback(err, null);
        });
      });

    });

  })(pins[p], power);

}

async.parallel(actions, function(err, results) {

  console.log("done!");

});