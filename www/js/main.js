	// create the module and name it scotchApp
	var user=true;
	//LocalStorage.save('user', {id: 12 , name: 'jaatin'});

	var providerApp = angular.module('providerApp', ['ngRoute']);

	// configure our routes
	providerApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'view/main/home.html',
				controller  : 'mainController',
					auth: function (user) {
      return user && user.isAdmin
    }
			})

			// route for the about page
			.when('/signup', {
				templateUrl : 'view/main/signup.html',
				controller  : 'mainController'
			})
				.when('/login', {
				templateUrl : 'view/main/login.html',
				controller  : 'mainController'
			})

			// route for the contact page
			.when('/password/grid', {
				templateUrl : 'view/password/grid.html',
				controller  : 'passwordController'
			})
			.when('/domain/domain', {
				templateUrl : 'view/domain/domain.html',
				controller  : 'domainController'
			})	
			
		.when('/userprofile/userprofile', {
				templateUrl : 'view/userprofile/userprofile.html',
				controller  : 'userController'
			})
		.otherwise({ redirectTo : '/signup'})
			
	}).
	run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser == null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "login.html") {
        } else {
         // $location.path("/login.html");
		//  window.location.href = 'login.html';
        }
      }
    });

	
})
;


//console.log(uesr);
	// create the controller and inject Angular's $scope
	

	providerApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	providerApp.controller('passwordController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	providerApp.controller('userController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});








