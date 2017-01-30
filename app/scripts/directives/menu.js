'use strict';
angular.module('htApp')
.directive('morMenu',function() {
	return{
		scope : {
			product:'=?' ,
			use:'=?'
		},
		restrict:'EA',
		templateUrl :'views/templates/menu.html',
		controller:'menuCntr',
		replace:true,
		link : function(scope, element, attrs, menuCntr){
			console.log('mor MenuBar directive :::',scope.product,':::->:::',scope.use);
		}
	};
})