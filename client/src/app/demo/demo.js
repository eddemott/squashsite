'use strict';

/**
 * @ngdoc function
 * @name ng.module:demo
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('demo', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:demoCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('DemoCtrl', ['$scope', function ($scope) {
		$scope.msg = 'This is the DemoCtrl controller';
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:demoFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('demoFactory', [function () {
		// Service logic
		// ...

		var meaningOfLife = 42;

		// Public API here
		return {
			someMethod: function () {
				return meaningOfLife;
			}
		};
	}]) //ghurt-marker:module
;