providerApp.controller('profileController', function($scope,$location,$http) {
		// create a message to display in our view	
		    
		 $scope.init=function()
		{
    $scope.profile();
	console.log('asd');
		} 	

		$scope.profile=function()
		{
     $http.get("http://localhost/passwordapp/test.php")
    .success(function(response) {
		 console.log('response');
		 $scope.userdetail = response;});
    
		}

//
	$scope.update=function()
		{
		var newdata ={};
			newdata.email=$scope.userdetail.email;
			newdata.firstname=$scope.userdetail.firstname;
			newdata.lastname=$scope.userdetail.lastname;
			newdata.phoneno=$scope.userdetail.phoneno;


             LocalStorage.save('user',newdata);


     $http.post("http://localhost/passwordapp/test.php",newdata)
	 .success(function(response){
		 console.log(response);
	
	 });

	 console.log('aaa');
		}  
		
});

