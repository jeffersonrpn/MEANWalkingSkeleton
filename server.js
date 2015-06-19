var express = require('express'),
	stylus = require('stylus'),
	mongoose = require('mongoose');

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


// Persistence
mongoose.connect('mongodb://localhost/meanstack');
var db = mongoose.connection;
db.on('errors', console.error.bind(console, 'connection error...'));
db.on('open', function callback() {
	console.log('meanstack db opened');
});
var messageSchema = mongoose.Schema({ message : String });
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(error, messageDoc){
	mongoMessage = messageDoc.message;
});

// Routes
app.get('/partials/:path', function (request, response) {
	response.render('partials/' + request.params.path);
});
app.get('*', function (request, response) {
	response.render('index', {
		mongoMessage: mongoMessage
	});
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');