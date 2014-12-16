Polymer('polymer-calculator', {
	theme: 'light',
	equation: '',
	result: '25',
	numpad: [
		['7', '8', '9', '*', 'CLR'],
		['4', '5', '6', '/', 'root'],
		['1', '2', '3', '+'],
		['.', '0', '=', '-'],
	],

	clear: function() {
		this.equation = '';
		this.result = '';
	},

	processButton: function(event) {
		// window.a = this.equation;
		// window.b = this.result;
		var val = event.target.attributes['data-value'].value;
		// console.log(val);

		if(val === 'root') {
			this.result = Math.sqrt(this.result);
		} else if (val === 'CLR') {
			this.equation = '';
			this.result = '';
		} else if (val === '=') {
			this.calculate();
		} else {
			this.equation += val;
		}
	},

	calculate: function() {
		// console.log(eval(this.equation));
		return eval(this.equation);
	}
});