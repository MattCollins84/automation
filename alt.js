var gpio = require("pi-gpio");
var argv = require('optimist').argv

var pin = argv.pin;

// gpio.open(pin, "input", function(err) {     // Open pin 16 for input
//   gpio.read(pin, function(err, value) {
//     console.log(err, value)
//     gpio.close(pin, function(err) {
//       console.log('done');
//     });
//   });
// });

gpio.open(16, "output", function(err) {
  
  gpio.getDirection(16, function(err, direction) {
    
    console.log(16, direction);

  });

});