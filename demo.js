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
wpi.digitalWrite(22, 0)

// Set the modulator to ASK for On Off Keying 
// by setting MODSEL pin lo
wpi.digitalWrite(18, 0)

// Initialise K0-K3 inputs of the encoder to 0000
wpi.digitalWrite(11, 0)
wpi.digitalWrite(15, 0)
wpi.digitalWrite(16, 0)
wpi.digitalWrite(13, 0)

// pause
sleep(2000000);
console.log("turn on");
wpi.digitalWrite(11, 1)
wpi.digitalWrite(15, 1)
wpi.digitalWrite(16, 1)
wpi.digitalWrite(13, 1)

// let it settle, encoder requires this
sleep(100000);

// Enable the modulator
wpi.digitalWrite(22, 1)

// keep enabled for a period
sleep(250000);

// Disable the modulator
wpi.digitalWrite(22, 0)