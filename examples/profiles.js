(function() {

	var block = document.getElementById("block"),
		button = document.getElementsByTagName("button")[0],
		random = function() {

			var random = Math.floor( ( Math.random() * 300 ) ),
				colors = [ "green" , "red" , "blue" , "green" , "grey" , "purple"],
				color = colors[ Math.floor(Math.random() * colors.length) ];

			console.log( color, random );

			return {
				margins: random,
				color: color
			};

		},
		move = function() {

			var randoms = random();

			console.log( randoms );

			return "margin-left: "+randoms.margins+"px;" +
				   "background: "+randoms.color;

		},
		append = function() {

			var css = move();

			console.log( css );

			block.style.cssText = css;

		};

	button.addEventListener("click" , append );


})();
