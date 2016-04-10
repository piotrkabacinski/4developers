var request = require("request"),
    pTime = require("./es5/pTime"),
    loop = require("./examples/loop");

// Flow: ajax() > Loop()

function ajax( callback ) {

  request('http://www.filltext.com/?rows=15', function (error, response, body) {

    if ( !error && response.statusCode == 200) {

      callback();

      loopTimer.init = new Date();
        loop();
      loopTimer.finish = new Date();

      console.log( "Ajax timer: " + ajaxTimer.result + "ms" );
      console.log( "Loop timer: " + loopTimer.result + "ms" );

    }

  });

}

var loopTimer = new pTime(),
    ajaxTimer = new pTime( new Date() );

ajax( function() {
  ajaxTimer.finish = new Date();
});
