var
	mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('errors', console.error.bind(console, 'Connection error...'));
	db.on('open', function callback() {
		console.log('meanstack db opened');
	});
};