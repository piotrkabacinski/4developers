var request = require("request"),
    pTime = require("./es5/pTime"),
    pubsub = require("./es5/pubsub");

var timer = new pTime(),
    pubsub = new pubsub();

// Publish events
pubsub.publish = "timeoutEnd";
pubsub.publish = "showResult";

// Subscribe functions
pubsub.subscribe( "timeoutEnd" , function( date ) {
  timer.finish = date;
});

pubsub.subscribe( "showResult" , function() {
  console.log( "Timeout: " + timer.result + " ms" );
});

// Init test
timer.init = new Date();

setTimeout( function() {

  pubsub.emit( "timeoutEnd" , new Date() );
  pubsub.emit( "showResult" , new Date() );

}, 1500 );
