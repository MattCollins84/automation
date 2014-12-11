var gpio = require('rpi-gpio');
gpio.setMode(gpio.MODE_BCM);

var async = require('async');
var argv = require('optimist').argv

var pins = [11, 15, 16, 13];
var actions = {};
var power = true; // (argv.power?true:false);

function delayedWrite(pin, value, callback) {
    setTimeout(function() {
        gpio.write(pin, value, callback);
    }, 500);
}

for (var p in pins) {

  (function(pin) {

    actions[pin] = function(callback) {

      gpio.setup(pin, gpio.DIR_OUT, function(err) {
        
        if (err) {
          return callback({ "action": "setup", err: err, pin: pin});
        }

        return callback(null, true);

      });

    };

  })(pins[p]);

}

async.series(actions, function(err, results) {

  if (err) {
    console.log(err);
    process.exit(0);
  }

  var writes = {}

  for (var r in results) {

    (function(pin) {

      console.log(pin);

    })(r)

  }

});