var express = require('express');

// Sets the enviroment of Node
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Views engine
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// Routes
app.get('*', function (request, response) {
	response.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');