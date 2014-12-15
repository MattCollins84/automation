var wpi = require('wiring-pi');
var sleep = require('sleep').usleep;

wpi.wiringPiSetupPhys();

// setup
console.log("setup");

// Select the GPIO pins used for the encoder K0-K3 data inputs
wpi.pinMode(11, wpi.modes.OUTPUT)
wpi.pinMode(15, wpi.modes.OUTPUT)
wpi.pinMode(16, wpi.modes.OUTPUT)
wpi.pinMode(13, wpi.modes.OUTPUT)

// Select the signal to select ASK/FSK
wpi.pinMode(18, wpi.modes.OUTPUT)

// Select the signal used to enable/disable the modulator
wpi.pinMode(22, wpi.modes.OUTPUT)

// Disable the modulator by setting CE pin lo
wpi.digitalWrite(22, wpi.LOW)

// Set the modulator to ASK for On Off Keying 
// by setting MODSEL pin lo
wpi.digitalWrite(18, wpi.LOW)

// Initialise K0-K3 inputs of the encoder to 0000
wpi.digitalWrite(11, wpi.LOW)
wpi.digitalWrite(15, wpi.LOW)
wpi.digitalWrite(16, wpi.LOW)
wpi.digitalWrite(13, wpi.LOW)

// pause
sleep(2000000);
console.log("turn on");

wpi.digitalWrite(11, wpi.HIGH)
wpi.digitalWrite(15, wpi.HIGH)
wpi.digitalWrite(16, wpi.HIGH)
wpi.digitalWrite(13, wpi.HIGH)

// let it settle, encoder requires this
sleep(100000);

// Enable the modulator
wpi.digitalWrite(22, wpi.HIGH)

// keep enabled for a period
sleep(250000);

// Disable the modulator
wpi.digitalWrite(22, wpi.LOW)

// pause
sleep(1000000);

console.log("turn off");

wpi.digitalWrite(11, wpi.HIGH)
wpi.digitalWrite(15, wpi.HIGH)
wpi.digitalWrite(16, wpi.HIGH)
wpi.digitalWrite(13, wpi.LOW)

// let it settle, encoder requires this
sleep(100000);

// Enable the modulator
wpi.digitalWrite(22, wpi.HIGH)

// keep enabled for a period
sleep(250000);

// Disable the modulator
wpi.digitalWrite(22, wpi.LOW)

// pause
sleep(1000000);

console.log("cleanup");
wpi.digitalWrite(11, wpi.LOW)
wpi.digitalWrite(15, wpi.LOW)
wpi.digitalWrite(16, wpi.LOW)
wpi.digitalWrite(13, wpi.LOW)
wpi.digitalWrite(18, wpi.LOW)
wpi.digitalWrite(22, wpi.LOW)
wpi.pinMode(11, wpi.modes.INPUT)
wpi.pinMode(15, wpi.modes.INPUT)
wpi.pinMode(16, wpi.modes.INPUT)
wpi.pinMode(13, wpi.modes.INPUT)
wpi.pinMode(18, wpi.modes.INPUT)
wpi.pinMode(22, wpi.modes.INPUT)