var express = require('express'),
	stylus = require('stylus');

module.exports = function(app, config) {
	function compile(str, path) {
		return stylus(str).set('filename', path);
	}

	// Views engine
	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');
	// This tells to express to any time that a request come in, it will match to a file on public directory (static route handling)
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));
};