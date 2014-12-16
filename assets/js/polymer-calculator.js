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

	// Check for special actions, otherwise add char to equation
	processButton: function(event) {
		window.a = this.equation;
		window.b = this.result;
		var val = event.target.attributes['data-value'].value;
		console.log(val);

		if(val === 'root') {
			this.result = Math.sqrt(this.result);
		} else if (val === 'CLR') {
			this.equation = '';
			this.result = '';
		} else if (val === '=') {
			this.calculate(this.equation);
		} else {
			this.equation += this.getValidKey(val);
		}
	},

	calculate: function(equation) {
		try {
			this.equation = eval(equation);
			this.result = this.equation;
			// console.log(this.equation);
		} catch (exception) {
			this.result = "error";
		}
	},

	// Only return the key if it matches button options
	getValidKey: function(key) {
		var keys = this.numpad;
		for(var i = 0; i < keys.length; i++) {
			for(var j = 0; j < keys[i].length; j++) {
				if(keys[i][j] == key)
					return key;
			}
		}
	}
});