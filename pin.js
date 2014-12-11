var gpio = require('rpi-gpio');
gpio.setMode(gpio.MODE_BCM);

var async = require('async');
var argv = require('optimist').argv

var pin = argv.pin;
var power = true;

function delayedWrite(pin, value, callback) {
    setTimeout(function() {
        gpio.write(pin, value, callback);
    }, 500);
}

gpio.setup(pin, gpio.DIR_OUT, function(err) {
        
  if (err) {
    return callback({ "action": "setup", err: err, pin: pin, power: power});
  }

  delayedWrite(pin, power, function(err) {
    if (err) {
      return callback({ "action": "write", err: err, pin: pin, power: power}, null);
    }

    return callback();
  });

  // gpio.write(pin, power, function(err) {
    
  //   if (err) {
  //     return callback({ "action": "write", err: err, pin: pin, power: power}, null);
  //   }

  //   return callback();
    
  // });

});