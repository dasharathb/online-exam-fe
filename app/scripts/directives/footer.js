'use strict';

angular.module('htApp')
.directive('footerDtl',[function(){
	return{
		scope:{

		},
		restrict:'EA',
		templateUrl:'views/templates/footer.html',
		replace:true,
		link : function(scope, element, attrs){
			console.log("this is header");
		}
	}
}]);