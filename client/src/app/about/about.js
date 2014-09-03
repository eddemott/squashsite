'use strict';

/**
 * @ngdoc function
 * @name ng.module:about
 * @function
 *
 * @description
 * [add a description]
 *
 */
angular.module('about', [])

	/**
	 * @ngdoc function
	 * @name ng.controller:AboutCtrl
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 */
	.controller('AboutCtrl', ['$scope', function ($scope) {
		$scope.msg = 'This is the AboutCtrl controller';
	}])

	/**
	 * @ngdoc function
	 * @name ng.factory:aboutFactory
	 * @function
	 *
	 * @description
	 * [add a description]
	 *
	 * @returns {string} A new instance of this factory.
	 *
	 */
	.factory('aboutFactory', [function () {
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