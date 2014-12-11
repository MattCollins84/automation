var gpio = require('rpi-gpio');
var async = require('async');
var argv = require('optimist').argv

var pin = argv.pin;

if (!pin) {
  console.log("--pin <pin number> is required");
  process.exit(0);
}

gpio.setup(pin, gpio.DIR_OUT, function(err) {
  console.log('setup out', err)
  gpio.write(pin, true, function(err, data) {
    console.log('write', err, data);
    gpio.setup(pin, gpio.DIR_IN, function(err) {
      console.log('setup in', err)
      gpio.read(pin, function(err, data) {
        console.log('read', err, data);
        process.exit(0);
      });
    });
  });
});