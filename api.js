var gpio = require('rpi-gpio');
gpio.setMode(gpio.MODE_BCM);

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
          
          if (err) {
            return callback({ "action": "write", err: err, pin: pin, power: power}, null);
          }

          return callback();
          
        });

      });

    });

  })(pins[p], power);

}

async.parallel(actions, function(err, results) {

  if (err) {
    return console.log(err);
  }

  console.log(results);

});