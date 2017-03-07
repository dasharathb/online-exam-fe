'use strict';
angular.module('htApp')
.directive('homeMenu',function() {
	return{
		scope : {
			isAdmin:"@"
		},
		restrict:'EA',
		templateUrl :'views/templates/homeMenu.html',
		controller:'homeMenuCntr',
		replace:true,
		link : function(scope, element, attrs, menuCntr){
		}
	};
})