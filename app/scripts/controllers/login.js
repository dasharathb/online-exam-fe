'use strict'
angular.module('htApp')
.controller('lCntrl',['$scope', '$rootScope','loginFact','$location',
	function($scope, $rootScope, loginFact,$location){
	console.log('login controller');

	 $scope.reg = function(){
    	$location.path('/registration');

    }

	$scope.submit = function(){
		console.log('aaaaaaaaaaaa');
		$scope.user=$scope.userId;
		$scope.pwd=$scope.pwd;

		console.log(':::::::::::',$scope.user,';;;;;;;;;;;',$scope.pwd);
		if($scope.loginDetails.userId == $scope.user && $scope.loginDetails.pwd ==$scope.pwd){
			console.log('hellooo');

			$rootScope.isLoggedIn = true;
			$rootScope.userId = $scope.loginDetails.userId;

			//console.log('rootScope ::::::::::::',$rootScope.isLoggedIn);
			if($rootScope.fromGotoExm == true){
				$location.path('/exam');
			}else{
				$location.path('/');
			}
			//$rootScope.userName = undefined;
		}else{
			console.log('not hello');
		}
	}

    $scope.getLogin = function(){
			loginFact.getLoginDetails().then(function(data){
				console.log('controller data ::::: ',data);
				$scope.loginDetails= data;
				console.log('user........',$scope.loginDetails.userId);

				
			});
		}



    $scope.init = function(){
			$scope.getLogin();
		}	
	$scope.init();



}]);