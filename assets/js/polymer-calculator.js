Polymer('polymer-calculator', {
	ready: function() {
		this.tabIndex = 0;
		this.focus();
	},
	theme: 'light',
	equation: '',
	result: '',
	numpad: [
		['7', '8', '9', '*', 'CLR'],
		['4', '5', '6', '/', '\u221A'],
		['1', '2', '3', '+'],
		['.', '0', '=', '-'],
	],

	// Uses Polymer event delegates
	eventDelegates: {
		keydown: 'keyDown', // Use keydown event for backspace
		keypress: 'keyPress'
	},

	// Clears everything
	clear: function() {
		this.equation = '';
		this.result = '';
	},

	// Deletes the last character from equation and clears any errors
	delete: function() {
		if(this.result) {
			this.result = '';
			this.equation = this.equation.toString().slice(0, -1);
		} else if(this.equation) {
			this.equation = this.equation.toString().slice(0, -1);
		}
	},

	// Check for special actions, otherwise add char to equation
	processButton: function(key) {
		var val;
		if(key.target) { // check if it's an event
			val = key.target.attributes['data-value'].value;
		} else {
			val = key;
		}

		switch(val) {
			case '\u221A':
				this.equation = Math.sqrt(this.equation);
				this.calculate(this.equation);
				break;
			case 'CLR':
				this.clear();
			case '=':
				this.calculate(this.equation);
				break;
			default:
				this.equation += this.getValidKey(val);
		}
	},

	// Attempt to calculate the equation and update the result accordingly
	calculate: function(equation) {
		try {
			this.equation = eval(equation);
			this.result = this.equation;
		} catch (exception) {
			this.result = "error";
		}
	},

	keyDown: function(event) {
		var key = event.keyCode || event.which;
		if(key === 8) {
			this.delete();
			event.preventDefault();
		}
	},

	// Handles keypresses aside from backspace
	keyPress: function(event) {
		var key = event.keyCode || event.which;
		var validkey = ''
		if(key === 13) { // Enter
			validkey = '=';
		} else {
			validkey = String.fromCharCode(key);
		}
		this.processButton(validkey);
		event.preventDefault();
	},

	// Only return the key if it matches button options
	getValidKey: function(key) {
		var keys = this.numpad;
		for(var i = 0; i < keys.length; i++) {
			for(var j = 0; j < keys[i].length; j++) {
				if(keys[i][j] == key || key == '(' || key == ')')
					return key;
			}
		}
		return '';
	}
});