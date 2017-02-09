'use strict';
angular.module('htApp')
.controller('onlineHeaderCntl',['$rootScope', '$scope', '$location',
	function($rootScope, $scope, $location){
	$scope.login=function(){
		console.log('this is login.............');
		$location.path('/onlineExam');
	}

	$scope.home=function(){
		console.log('this is login.............');
		$location.path('/');
	}

}]);