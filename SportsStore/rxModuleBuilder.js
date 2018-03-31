/*
* Description: 	NPM package doesn’t contain the information that the SystemJS JavaScript
*	module loader requires to load a module and resolve its dependencies.
*	
*	That means it is needed to create a JavaScript module containing the Reactive Extensions code.
*	The systemjs-builder package added to the package.json is used to build modules,
*	and this file configure it.
*
*	This configuration creates a module containing all of the Reactive Extensions functionality, along with
*	the additional information that SystemJS needs to resolve dependencies. Running the following command:
*		node ./rxModuleBuilder.js
*/
var Builder = require("systemjs-builder");
var builder = new Builder("./");
builder.config({
	paths: {
		"rxjs/*": "node_modules/rxjs/*.js"
	},
	map: {
		"rxjs": "node_modules/rxjs"
	},
	packages: {
		"rxjs": { main: "Rx.js", defaultExtension: "js" }
	}
});
builder.bundle("rxjs", "rxjs.module.min.js", {
	normalize: true,
	runtime: false,
	minify: true,
	mangle: false
});