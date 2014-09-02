'use strict';

// Load routes scripts
var getDemoCollection = require('./getDemoCollection/getDemoCollection');
var getDemoElement = require('./getDemoElement/getDemoElement');
//ghurt-marker:require

// Define route config
var getDemoCollectionConfig = {
	method: 'GET',
	path: '/api/demo',
	config: {
		handler: getDemoCollection.getDemoCollectionHandler,
		cache: {
			privacy: 'default',
			expiresIn: 86400000 //: a day in milliseconds
		}
	}
};
var getDemoElementConfig = {
	method: 'GET',
	path: '/api/demo/{demoID}',
	config: {
		handler: getDemoElement.getDemoElementHandler,
		cache: {
			privacy: 'default',
			expiresIn: 86400000 //: a day in milliseconds
		}
	}
};
//ghurt-marker:conf

module.exports = [
	getDemoCollectionConfig,
	getDemoElementConfig //ghurt-marker:export
];