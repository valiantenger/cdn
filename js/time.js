var clock;

$(document).ready(function() {
	// Instantiate a counter
	clock = new FlipClock($('.clock'), 10, {
		clockFace: 'Counter',
		autoStart: true,
		countdown: true
	});
});
