var cycles = require("./es5/cycles"),
    loop = require("./examples/loop");

var cyclesAmount = 1000,

    test = new cycles({
      cycles: cyclesAmount,
      function: loop
    });

test.init();

// console.log( test );
console.log( "Average time for "+cyclesAmount+ " runs was " + test.result + " ms" );
