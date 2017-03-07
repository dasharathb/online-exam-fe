'use strict';
angular.module('htApp')
.controller('homeMenuCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
		//$rootScope.isAdmin = false;
	console.log('isAdmin:::::::::::',$scope.isAdmin);
	console.log('this menu directive controller');
	$scope.gotoExam = function(){
				
		if($rootScope.isLoggedIn == true){

			$location.path('/exam');
		}else{
			$rootScope.fromGotoExm = true;
			$location.path('/onlineExam');
		}
	}
     $scope.setting=function(){
     	$location.path('/admin');
     }
	
		
}]);