
(function(window) {
	var sayWord = "Good Bye";
	var byeSpeaker = function (name) {
  		console.log(sayWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
