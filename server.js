var express = require('express'),
	stylus = require('stylus');

// Sets the enviroment of Node
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}

// Views engine
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
// This tells to express to any time that a request come in, it will match to a file on public directory (static route handling)
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/partials/:path', function (request, response) {
	response.render('partials/' + request.params.path);
});
app.get('*', function (request, response) {
	response.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');