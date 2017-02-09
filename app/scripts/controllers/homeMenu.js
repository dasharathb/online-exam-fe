'use strict';
angular.module('htApp')
.controller('homeMenuCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
	
	console.log('this menu directive controller');
	$scope.gotoExam = function(){
				
		if($rootScope.isLoggedIn == true){
			$location.path('/exam');
		}else{
			$rootScope.fromGotoExm = true;
			$location.path('/onlineExam');
		}
	}

	
		
}]);