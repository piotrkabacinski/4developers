// https://nodejs.org/api/process.html#process_process_hrtime

var loop = require("./examples/loop"),
    time = process.hrtime();

loop();

console.log( process.hrtime(time) );
