var gpio = require('rpi-gpio');
var async = require('async');
var argv = require('optimist').argv

var pin = argv.pin;

if (!pin) {
  console.log("--pin <pin number> is required");
  process.exit(0);
}

gpio.setup(pin, gpio.DIR_IN, function(err) {
  gpio.read(pin, function(err, data) {
    console.log(err, data);
    process.exit(0);
  });
});