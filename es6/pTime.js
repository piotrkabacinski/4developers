class pTime {

	constructor( value ) {
		this.start = value || 0;
		this.end = null;
		this.pauses = {};
	}

	set init( value ) {

		if( value ) {
			this.start = value;
		}

	}

	set finish( value ) {

		if( value ) {
			this.end = value;
		}

	}

	pause( label , value ) {

		if( label && value ) {

			this.pauses[label] = {
				start: value ,
				end: null
			};

		}

	}

	resume( label , value ) {

		if( this.pauses[label] && value ) {
			this.pauses[label].end = value;
		}

	}

	get result() {

		let time = this.end - this.start,
				pausesSum = 0,
				finalTime;

		for ( let key in this.pauses ) {

			if ( this.pauses.hasOwnProperty(key) ) {
				pausesSum += this.pauses[key].end - this.pauses[key].start;
			}

		}

		finalTime = time - pausesSum;

		return finalTime;

	}

}

export default pTime;
