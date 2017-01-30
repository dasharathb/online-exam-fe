'use strict';

angular.module('htApp')
.directive('headerDtl',[function(){
	return{
		scope:{

		},
		restrict:'EA',
		templateUrl:'views/templates/header.html',
		replace:true,
		link : function(scope, element, attrs){
			console.log("this is header");
		}
	}
}]);