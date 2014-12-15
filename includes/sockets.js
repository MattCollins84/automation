var energenie = require('./energenie.js')

var oneOn = function(qs, callback) {
  
  energenie.socket1.on();
  
  return callback(null, ["Socket 1 is now on"]);

}

var oneOff = function(qs, callback) {
  
  energenie.socket1.off();

  return callback(null, ["Socket 1 is now off"]);

}

module.exports = {
  oneOn: oneOn,
  oneOff: oneOff
}