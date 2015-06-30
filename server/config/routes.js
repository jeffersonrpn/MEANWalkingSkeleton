var
  auth = require('./auth'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

	app.get('/api/users', auth.requiresRole('admin'), function (request, response) {
		User.find({}).exec(function (errorm, collection) {
			response.json(collection);
		});
	});

	app.get('/partials/*', function (request, response) {
		response.render('../../public/app/views/' + request.params[0]);
	});
	app.post('/login', auth.authenticate);
	app.post('/logout', function (request, response) {
		request.logout();
		response.end();
	});
	app.get('*', function (request, response) {
		response.render('index', {
			bootstrappedUser : request.user
		});
	});

};