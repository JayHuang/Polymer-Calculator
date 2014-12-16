#Polymer Calculator

A custom calculator element using [Polymer](https://www.polymer-project.org/)

###Dependencies

Polymer - See the [official documentation](https://www.polymer-project.org/docs/start/getting-the-code.html) for Polymer

###Use

After including Polymer in your project, simply include `polymer-calculator.html`, `polymer-calculator.js`, and `polymer-calculator.css` from this repository.

Place the calculator in your page like this:
`<polymer-calculator></polymer-calculator>`

By default, the calculator uses the light theme. To use the dark theme instead, add `theme="dark"` as an attribute to the element
See `index.html` for examples

There is also support for calculations including brackets although buttons for brackets are not included. Try using keypresses!

![Polymer Calculator](/screenshots/polymer-calculator.jpg)

**NOTE**: You must run your app from a web server for the HTML Imports to work properly. They cannot be loaded from file:// due to the browser’s security restrictions.

###Live demo

You can see the plugin live on my website [here](http://www.jayhuang.org/git/demo/polymer-calculator).

###Copyright and license

Copyright 2014 Jay Huang under the MIT license.