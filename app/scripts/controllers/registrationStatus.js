'use strict'
angular.module('htApp')
.controller('regSucCntrl',['$scope','$location','$routeParams',
	function($scope,$location,$routeParams){
		$scope.msg = $routeParams.msg;
		console.log('success......',$scope.msg);
}]);