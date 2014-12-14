var gpio = require("pi-gpio");

gpio.open(16, "input", function(err) {
  
  console.log("input", err)

  gpio.getDirection(16, function(err, direction) {
    
    console.log("getDirection", direction);

      gpio.read(16, function(err, value) {
        
        console.log("read", err, value);

        var new_value = "0";
        if (value == "0") { new_value = "1"; }
        console.log("new value", new_value);

        gpio.setDirection(16, "output", function(err) {

          console.log("setDirection", err);

          gpio.write(16, new_value, function(err) {

            console.log("write "+new_value, err);

            gpio.setDirection(16, "input", function(err) {

              console.log("setDirection", err);

              gpio.read(16, function(err, value2) {

                console.log("read", value2);

                gpio.close(16, function(err) {
                  console.log("done", err)
                });

              });

            })

          });

        });

      });

  });

});