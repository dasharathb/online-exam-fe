'use strict';
angular.module('htApp')
.directive('homeMenu',function() {
	return{
		scope : {
			product:'=?' ,
			use:'=?'
		},
		restrict:'EA',
		templateUrl :'views/templates/homeMenu.html',
		controller:'homeMenuCntr',
		replace:true,
		link : function(scope, element, attrs, menuCntr){
			console.log('mor MenuBar directive :::',scope.product,':::->:::',scope.use);
		}
	};
})