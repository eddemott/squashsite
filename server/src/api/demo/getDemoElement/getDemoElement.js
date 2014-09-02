'use strict';

var logger = require('../../util/logger'),
		Hapi = require('hapi');

/**
 * getDemoElement
 * @type {Object}
 */
var getDemoElement = {

	/**
	 * getDemoElement Handler
	 * Get and reply to the request
	 * 
	 */
	getDemoElementHandler: function (request, response) {

		// Logging when a new request is received
		logger.log('info', 'getDemoElement: New request received', {
			tags: ['app_info'],
			method: 'getDemoElement'
		});

		response({success: true}).code(200);
	}
};

module.exports = getDemoElement;