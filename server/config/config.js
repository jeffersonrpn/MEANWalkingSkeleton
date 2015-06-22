var
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/meanstack',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://meanstackuser:meanpass@ds047742.mongolab.com:47742/meanstack',
		port: process.env.PORT || 80
	}
};