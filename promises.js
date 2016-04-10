var status;

get('api/status').then( function( response ) {

    status = response["value"];

}, function(error) {

    console.error( error );

});
