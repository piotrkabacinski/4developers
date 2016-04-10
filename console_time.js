var loop = require("./examples/loop");

var start,
		end;

console.time("Console time: ");
start = new Date();

	loop();

console.timeEnd("Console time: ");
console.log( "Date(): " + String( new Date() - start.getTime() ) + "ms" );
