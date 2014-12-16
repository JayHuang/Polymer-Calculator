Polymer('polymer-calculator', {
	ready: function() {
		this.tabIndex = 0;
		this.focus();
	},

	theme: 'light',
	equation: '',
	result: '25',
	numpad: [
		['7', '8', '9', '*', 'CLR'],
		['4', '5', '6', '/', 'root'],
		['1', '2', '3', '+'],
		['.', '0', '=', '-'],
	],

	// Uses Polymer event delegates
	eventDelegates: {
		keypress: 'keyPress'
	},

	clear: function() {
		this.equation = '';
		this.result = '';
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
			case 'root':
				this.result = Math.sqrt(this.result);
				break;
			case 'CLR':
				this.equation = '';
				this.result = '';
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

	keyPress: function(event) {
		var key = event.keyCode;
		var validkey = ''
		if(key === 13) { // Enter
			validkey = '=';
		} else {
			validkey = String.fromCharCode(key);
		}
		this.processButton(validkey);
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
		return '';
	}
});