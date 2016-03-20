'use strict';

/* defining the app */
angular.module('routeFightApp', ['ngRoute'])
	.config(config);

    function config($routeProvider) {
	    $routeProvider
				.when('/', {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'vm'
                })
				.otherwise({redirectTo: '/'});
	}