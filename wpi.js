var wpi = require('wiring-pi');

wpi.wiringPiSetup();

// read the value
wpi.pinMode(16, wpi.modes.INPUT);
console.log(wpi.digitalRead(16));

// write the value
wpi.pinMode(16, wpi.modes.OUTPUT);
wpi.digitalWrite(16);

// read the value
wpi.pinMode(16, wpi.modes.INPUT);
console.log(wpi.digitalRead(16));