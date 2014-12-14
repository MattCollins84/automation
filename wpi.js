var wpi = require('wiring-pi');

wpi.wiringPiSetup();

var pin = 0;

// read the value
wpi.pinMode(pin, wpi.modes.INPUT);
var val = wpi.digitalRead(pin);
console.log(val);

var new_val = (1 - val);

// write the value
wpi.pinMode(pin, wpi.modes.OUTPUT);
console.log('writing '+new_val)
wpi.digitalWrite(pin, new_val);

// read the value
wpi.pinMode(pin, wpi.modes.INPUT);
console.log(wpi.digitalRead(pin));