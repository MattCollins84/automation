var gpio = require('rpi-gpio');
var async = require('async');
var argv = require('optimist').argv

var pins = [11, 15, 16, 13];
var actions = [];
var power = (argv.power?true:false);

for (var p in pins) {

  (function(pin, power) {

    actions.push(function(callback) {

      gpio.setup(pin, gpio.DIR_OUT, function(err) {
        
        if (err) {
          return callback({ "action": "setup", err: err, pin: pin, power: power});
        }

        gpio.write(pin, power, function(err) {
          return callback({ "action": "write", err: err, pin: pin, power: power}, null);
        });

      });

    });

  })(pins[p], power);

}

async.parallel(actions, function(err, results) {

  console.log(err);

});