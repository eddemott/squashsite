'use strict';

var Hapi = require('hapi');
var config = require('./config');
var indexRoutes = require('./src/api/index/indexRoutes');
var demoRoutes = require('./src/api/demo/demoRoutes.js');
//ghurt-marker:require

var options = {
	cors: true,
	cache: {
		engine: 'redis',
		partition: 'cm'
	}
};

var server = Hapi.createServer('0.0.0.0', config.port, options);


server.route(indexRoutes);
server.route(demoRoutes);
//ghurt-marker:route

// Hook to provide index.html for any request
server.ext('onPreResponse', function (request, reply) {
	var response = request.response;
	if (!response.isBoom || response.output.statusCode !== 404) {
		return reply();
	}
	reply.file('../client/dist/index.html');
});

server.start();
console.log('Hapi server running in port ' + config.port);

module.exports = server;