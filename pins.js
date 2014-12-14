var gpio = require('rpi-gpio');
//gpio.setMode(gpio.MODE_BCM);

var async = require('async');

// delayed write function
var delayedWrite = function(pin, value, callback) {
  setTimeout(function() {
      gpio.write(pin, value, callback);
  }, 500);
}

var write = function(pins, callback) {

  var actions = {};

  for (var p in pins) {

    (function(pin) {

      if (!pin.pin) {
        return;
      }

      if (typeof pin.value == "undefined") {
        pin.value = false;
      }

      pin.value = (pin.value?true:false);

      actions[pin.pin] = function(callback) {

        gpio.setup(pin.pin, gpio.DIR_OUT, function(err) {
          
          if (err) { return callback({ "action": "setup", err: err, pin: pin.pin}); }

          gpio.write(pin.pin, pin.value, function(err, data) {

            if (err) { return callback({ "action": "writing", err: err, pin: pin.pin}); }
            
            return callback(null, pin.value);

          });

        });

      };

    })(pins[p]);

  }

  async.series(actions, function(err, results) {

    if (err) { return callback(err); }

    return callback(null, data);

  })

}

var read = function(pins, callback) {

  var actions = {};

  for (var p in pins) {

    (function(pin) {

      actions[pin] = function(callback) {

        gpio.setup(pin, gpio.DIR_IN, function(err) {
          
          if (err) { return callback({ "action": "setup", err: err, pin: pin}); }

          gpio.read(pin, function(err, data) {

            if (err) { return callback({ "action": "reading", err: err, pin: pin}); }
            
            return callback(null, data);

          });

        });

      };

    })(pins[p]);

  }

  async.series(actions, function(err, results) {

    if (err) { return callback(err); }

    return callback(null, data);

  })

}

module.exports = {
  write: write,
  read: read
}