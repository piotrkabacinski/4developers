var loop = function() {

	var bar = [],
		z = 0,
		l = 1e5;

	for( var i = 0; i < l; i++ ) {

		z += 1;

		bar.push( z );

	}

};

var module = module || {};
module.exports = loop;
