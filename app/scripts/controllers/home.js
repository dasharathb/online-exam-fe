'use strict';
angular.module('htApp')
.controller('homeCntr',['$scope','$location',
	function($scope,$location){
		$scope.rightLeft =true;

		console.log('this is home controller................');
		$scope.clear=function(){
			console.log('this is home controller................');
			document.getElementById('textId').value = '';
		}
		$scope.first=function(){
		console.log('this is home controller................');	
		document.getElementById("demo").style.background  = "green";

		}

	$scope.minimizeRightPan = function(){
		$scope.rightLeft =false;
		$('#rightPan').hide();
		$('#leftPan').width('98%');
	}
	$scope.maxmizeRightPan = function(){
		$scope.rightLeft =true;
		$('#rightPan').show();
		$('#leftPan').width('78%');
	}
			
		

	}]);
