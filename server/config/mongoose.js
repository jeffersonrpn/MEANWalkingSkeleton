var
	mongoose = require('mongoose'),
	crypto = require('crypto');

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
		username: String,
		password: String,
		salt: String,
		roles: [String]
	});
	userSchema.methods = {
		authenticate: function(passwordToMatch) {
			return hashPassword(this.salt, passwordToMatch) === this.password;
		}
	};
	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(error, collection) {
		if (collection.length === 0) {
			var salt = createSalt();
			var hash = hashPassword(salt, 'jeff');
			User.create({ firstName: "Jeff", lastName: "Neves", username: "jeff", password: hash, salt: salt, roles: ["admin"] });
			salt = createSalt();
			hash = hashPassword(salt, 'joe');
			User.create({ firstName: "Joe", lastName: "Doe", username: "joe", password: hash, salt: salt, roles: [] });
			salt = createSalt();
			hash = hashPassword(salt, 'dan');
			User.create({ firstName: "Dan", lastName: "Johnes", username: "dan", password: hash, salt: salt });
		}
	});
};

function createSalt() {
	return crypto.randomBytes(128).toString('base64');
}

function hashPassword(salt, password) {
	var hmac = crypto.createHmac('sha1', salt);
	return hmac.update(password).digest('hex');
}