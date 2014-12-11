var gpio = require('rpi-gpio');
//gpio.setMode(gpio.MODE_BCM);

var async = require('async');
var argv = require('optimist').argv

var pins = [11, 15, 16, 13];
var actions = {};
var power = true; // (argv.power?true:false);

var delayedWrite = function(pin, value, callback) {
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

      writes[pin] = delayedWrite(pin, true, function(err, data) {

        return callback(err, data);

      });

    })(r);

  }

  async.series(writes, function(err2, results2) {

    console.log(err2, results2);

  });

});