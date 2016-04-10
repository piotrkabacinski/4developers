var request = require("request"),
    pTime = require("./es5/pTime"),
    pubsub = require("./es5/pubsub"),
    loop = require("./examples/loop");

// Flow: ajax() > Loop()

function ajax() {

  request('http://www.filltext.com/?rows=15', function ( error, response ) {

    if ( !error && response.statusCode == 200) {

      pubsub.emit( "ajaxEnd" , new Date() );

      loopTimer.init = new Date();
        loop();
      loopTimer.finish = new Date();

      pubsub.emit( "showResult" , new Date() );

    }

  });

}

var loopTimer = new pTime(),
    ajaxTimer = new pTime(),
    pubsub = new pubsub();

// Publish events
pubsub.publish = "ajaxEnd";
pubsub.publish = "showResult";

// Subscribe functions
pubsub.subscribe( "ajaxEnd" , function( date ) {

  ajaxTimer.finish = date;

});

pubsub.subscribe( "showResult" , function() {
  console.log( "Ajax timer: " + ajaxTimer.result + "ms" );
  console.log( "Loop timer: " + loopTimer.result + "ms" );
});

// Init ajaxTimer
ajaxTimer.init = new Date();

// Init function
ajax();
