var passwordApp = angular.module('passwordApp', ['ngRoute']);

passwordApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'mainController'
      }).

when('/user profile', {
        templateUrl: 'view/login.html',
        controller: 'loginController'
      });
		  ]);
      
     passwordApp.controller('mainController', function($scope) 
		 {
		
$scope.user=[{username='admin',password='admin'}]

		
	});

passwordApp.controller('loginController', function($scope) 
		 {
		


		
	});

