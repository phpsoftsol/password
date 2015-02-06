providerApp.controller('mainController', function($rootScope,$scope,$location) {
		// create a message to display in our view	
		    $scope.email = "user@gmail.com",
			$scope.password="admin",
		$scope.message = 'Everyone come and see how good I look!',
 $scope.init=function()
		{
  // $scope.loginuser();
  $rootScope.loggedInUser=true;
  console.log( $location.path());
		} 	

		$scope.loginuser=function()
		{
	  if($scope.email=="user@gmail.com" && $scope.password=="admin")
        {
           
            $location.path("/" );
        }
        else
        {
            $scope.message="Error";
            
        }
		}
	});