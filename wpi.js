var wpi = require('wiring-pi');

wpi.wiringPiSetupPhys();

// read the value
wpi.pinMode(16, wpi.modes.INPUT);
var val = wpi.digitalRead(16);
console.log(val);

var new_val = (1 - val);

// write the value
wpi.pinMode(16, wpi.modes.OUTPUT);
console.log('writing '+new_val)
wpi.digitalWrite(16, new_val);

// read the value
wpi.pinMode(16, wpi.modes.INPUT);
console.log(wpi.digitalRead(16));