'use strict';

var logger = require('../../util/logger'),
		Hapi = require('hapi');

/**
 * getDemoCollection
 * @type {Object}
 */
var getDemoCollection = {

	/**
	 * getDemoCollection Handler
	 * Get and reply to the request
	 * 
	 */
	getDemoCollectionHandler: function (request, response) {

		// Logging when a new request is received
		logger.log('info', 'getDemoCollection: New request received', {
			tags: ['app_info'],
			method: 'getDemoCollection'
		});

		response({success: true}).code(200);
	}
};

module.exports = getDemoCollection;