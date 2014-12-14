var gpio = require('rpi-gpio');


var async = require('async');
var argv = require('optimist').argv

var pin = argv.pin;
var bcm = (argv.bcm=="true"?true:false);

console.log("PIN", pin);
console.log("BCM", bcm);

if (bcm) {
  gpio.setMode(gpio.MODE_BCM);
} else {
  gpio.setMode(gpio.MODE_RPI);
}

if (!pin) {
  console.log("--pin <pin number> is required");
  process.exit(0);
}

gpio.setup(pin, gpio.DIR_IN, function(err) {
  console.log('setup in', err)
  gpio.read(pin, function(err, data) {
    console.log('read', err, data);
    process.exit(0);
  });
});