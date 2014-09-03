'use strict';
/*jshint camelcase: false */

describe('app module', function () {

	
	describe('aboutCtrl controller', function () {

		var scope, AboutCtrl;
		
		beforeEach(module('app'));
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			AboutCtrl = $controller('AboutCtrl', {
				$scope: scope
			});
		}));
		
		it('should have the msg correctly defined in the scope', function () {
			scope.$root.$digest();
			expect(scope.msg).toEqual('This is the AboutCtrl controller');
		});

	});
//ghurt-marker:test
});