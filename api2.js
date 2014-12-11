var gpio = require('pi-gpio');

var async = require('async');
var argv = require('optimist').argv

var pins = [11, 15, 16, 13];
var actions = [];
var power = true; // (argv.power?true:false);

function delayedWrite(pin, value, callback) {
    setTimeout(function() {
        gpio.write(pin, value, callback);
    }, 500);
}

for (var p in pins) {

  (function(pin, power) {

    actions.push(function(callback) {

      gpio.setDirection(pin, "output", function(err, data) {
        
        if (err) {
          return callback({ "action": "setup", err: err, pin: pin, value: data});
        }

        delayedWrite(pin, power, function(err, data) {
          
          if (err) {
            return callback({ "action": "write", err: err, pin: pin, value: data}, null);
          }

          return callback(null, data);
        });

        // gpio.write(pin, power, function(err) {
          
        //   if (err) {
        //     return callback({ "action": "write", err: err, pin: pin, power: power}, null);
        //   }

        //   return callback();
          
        // });

      });

    });

  })(pins[p], power);

}

async.series(actions, function(err, results) {

  if (err) {
    return console.log(err);
    process.exit(0);
  }

  console.log(results);
  process.exit(0);

});