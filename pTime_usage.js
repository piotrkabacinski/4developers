var pTime = require("./es5/pTime"),
		loop = require("./examples/loop");

var timer = new pTime( new Date() );

loop();

timer.finish = new Date();

console.log( timer.result + "ms" );
