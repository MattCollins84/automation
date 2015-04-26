var wpi = require('wiring-pi');
var sleep = require('sleep').usleep;

wpi.wiringPiSetupPhys();

console.log(process);
process.exit(0);

// setup
console.log("setup");

// Select the GPIO
wpi.pinMode(pin, wpi.modes.OUTPUT);

console.log("lights out!");
wpi.digitalWrite(pin, wpi.LOW)

sleep(2000000);

console.log("lights!");
wpi.digitalWrite(pin, wpi.HIGH)

sleep(2000000);

console.log("lights out!");
wpi.digitalWrite(pin, wpi.LOW)