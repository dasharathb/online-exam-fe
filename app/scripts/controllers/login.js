'use strict'
angular.module('htApp')
.controller('lCntrl',['$scope', '$rootScope','loginFact','$location',
	function($scope, $rootScope, loginFact,$location){
	console.log('login controller');
    var login ={};
	 $scope.reg = function(){
    	$location.path('/registration');

    }

	$scope.submit = function(){
		console.log('aaaaaaaaaaaa');
	    var login ={};
		login.email=$scope.email;
		login.password=$scope.pwd;
		console.log('login::::',login);

		//console.log(':::::::::::',$scope.user,';;;;;;;;;;;',$scope.pwd);
		//if($scope.loginDetails.userId == $scope.user && $scope.loginDetails.pwd ==$scope.pwd){
			//console.log('hellooo');

			$rootScope.isLoggedIn = true;
			//$rootScope.userId = $scope.loginDetails.userId;

			//console.log('rootScope ::::::::::::',$rootScope.isLoggedIn);
			if($rootScope.fromGotoExm == true){
				$location.path('/exam');
			}else{
				$location.path('/');
			}

		loginFact.getLoginDetails(login).then(function(data){
				console.log('controller data ::::: ',data);
				$scope.loginDetails= data;
				//console.log('user........',$scope.loginDetails.userId);
			});


	
     }
    /*$scope.getLogin = function(){
			loginFact.getLoginDetails(login).then(function(data){
				console.log('controller data ::::: ',data);
				$scope.loginDetails= data;
				console.log('user........',$scope.loginDetails.userId);

				
			});
		}



    $scope.init = function(){
			$scope.getLogin();
		}	
	$scope.init();*/



}]);