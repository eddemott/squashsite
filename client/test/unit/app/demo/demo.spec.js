'use strict';
/*jshint camelcase: false */

describe('demo module', function () {

	
	describe('demoCtrl controller', function () {

		var scope, DemoCtrl;
		
		beforeEach(module('demo'));
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			DemoCtrl = $controller('DemoCtrl', {
				$scope: scope
			});
		}));
		
		it('should have the msg correctly defined in the scope', function () {
			scope.$root.$digest();
			expect(scope.msg).toEqual('This is the DemoCtrl controller');
		});

	});

	describe('demoFactory factory', function () {

		var demoFactory;

		beforeEach(module('demo'));
		beforeEach(inject(function (_demoFactory_) {
			demoFactory = _demoFactory_;
		}));

		it('- should return the meaning of life', function () {
			expect(demoFactory.someMethod()).toEqual(42);
		});

	});
//ghurt-marker:test
});