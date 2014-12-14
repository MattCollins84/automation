var gpio = require('rpi-gpio');


var async = require('async');
var argv = require('optimist').argv

var pin = argv.pin;
var bcm = (argv.bcm=="true"?true:false);
var value = (argv.value=="true"?true:false);

if (bcm) {
  gpio.setMode(gpio.MODE_BCM);
} else {
  gpio.setMode(gpio.MODE_RPI);
}

if (!pin) {
  console.log("--pin <pin number> is required");
  process.exit(0);
}

gpio.setup(pin, gpio.DIR_OUT, function(err) {
  console.log('setup out', err)
  gpio.write(pin, value, function(err, data) {
    console.log('write', err, data);
    process.exit(0);
  });
});