
module.exports = function(app) {
	app.get('/partials/*', function (request, response) {
		response.render('partials/' + request.params[0]);
	});
	app.get('*', function (request, response) {
		response.render('index');
	});
};