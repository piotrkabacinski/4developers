describe('for() or while()?', function() {

	// Settings and tests instantions
	var cyclesAmount = 100,

	loopTest = new cycles({
		cycles: cyclesAmount,
		function: loop
	}),

	loopTest2 = new cycles({
		cycles: cyclesAmount,
		function: loop_2
	});


	it('Measures for()', function() {

		loopTest.init();
		console.log( "Average time for "+cyclesAmount+ " for() runs was " + loopTest.result + " ms" );

	});

	it('Measures bar()', function() {

		loopTest2.init();
		console.log( "Average time for "+cyclesAmount+ " while() runs was " + loopTest2.result + " ms" );

	});

});