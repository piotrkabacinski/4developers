class pubsub {

	constructor() {
		// Published events and their subscribed functions
		this.events = {};
	}

	// Add event name to list
	set publish( eventName ) {

		this.events[eventName] = [];

	}

	// Remove event name from list
	unpublish( eventName ) {

		delete this.events[eventName];

	}

	// Subscribe function to event
	subscribe( eventName , callbackfunction ) {

		this.events[eventName].push( callbackfunction );

	}

	// Remove function from event
	unsubscribe( eventName , callbackfunction ) {

		this.events[eventName].splice( this.events[eventName].indexOf( callbackfunction ) , 1 );

	}

	// Initiate event
	emit( eventName , data ) {

		if( this.events[eventName] ) {

			this.events[eventName].forEach(function(fn){

				fn(data);

			});

		} else {
			console.error("Event \""+eventName+"\" has not beed published");
		}

	}

}

export default pubsub;
