var energenie = require('./energenie.js')

var oneOn = function(qs, callback) {
  
  energenie.socket1.on();
  
  return callback(true, ["Socket 1 is now on"]);

}

var oneOff = function(qs, callback) {
  
  energenie.socket1.off();

  return callback(true, ["Socket 1 is now on"]);

}

moduoe.exports = {
  oneOn: oneOn,
  oneOff: oneOff
}