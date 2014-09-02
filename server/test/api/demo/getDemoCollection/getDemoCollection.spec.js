'use strict';

var sinon = require('sinon');
var getDemoCollection = require('../../../../src/api/demo/getDemoCollection/getDemoCollection');
var logger = require('../../../../src/api/util/logger');
var Hapi = require('Hapi');

describe('getDemoCollection controller', function () {

	describe('handler', function () {

		var logStub, server;
		server = new Hapi.Server();
		server.route({
			method: 'GET',
			path: '/',
			config: {
				handler: getDemoCollection.getDemoCollectionHandler
			}
		});

		beforeEach(function () {
			logStub = sinon.stub(logger, 'log');
		});

		afterEach(function () {
			logStub.restore();
		});

		it('should call the logger', function (done) {
			server.inject('/', function (res) {
				expect(logStub.called).toBe(true);
				expect(logStub.args[0][0]).toEqual('info');
				expect(logStub.args[0][2].tags).toEqual(['app_info']);
				expect(logStub.args[0][2].method).toEqual('getDemoCollection');
				done();
			});
		});

		it('should reply a success', function (done) {
			server.inject('/', function (res) {
				expect(res.result).toEqual({success: true});
				expect(res.statusCode).toEqual(200);
				done();
			});
		});

	});

});