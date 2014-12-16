Polymer('polymer-calculator', {
	theme: 'light',
	numpad: [
		['7', '8', '9', '*', 'CLR'],
		['4', '5', '6', '/', 'root'],
		['1', '2', '3', '+'],
		['.', '0', '=', '-'],
	],

	processButton: function(event) {
		var val = event.target.attributes['data-value'].value;
		// console.log(val);
	}
});