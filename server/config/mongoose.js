var
	mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('errors', console.error.bind(console, 'Connection error...'));
	db.on('open', function callback() {
		console.log('meanstack db opened on ' + config.db);
	});

	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String
	});
	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(error, collection) {
		if (collection.length === 0) {
			User.create({ firstName: "Jeff", lastName: "Neves", username: "jeff" });
			User.create({ firstName: "Joe", lastName: "Doe", username: "joe" });
			User.create({ firstName: "Dan", lastName: "Johnes", username: "dan" });
		}
	});
};