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

gpio.open(16, "input", function(err) {
  
  gpio.getDirection(16, function(err, direction) {
    
    console.log(16, direction);

    //gpio.write(16, "1", function(err) {
      
      //console.log(16, err);

      gpio.read(16, function(err, value) {
        
        console.log(16, value);

        gpio.close(16);

      });

    //});

  });

});