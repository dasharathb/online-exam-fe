'use strict';
angular.module('htApp')
.factory('loginFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var loginFact = {};
	loginFact.getLoginDetails=function(){


		var defer = $q.defer();
		//var serviceURI = getServiceURI.build('mor', 'account');
		var serviceURI = "./../../json/login.json";

		$http({
				method: 'GET',
				url: serviceURI
			}).then(function(data){
				defer.resolve(data.data);
			},
			 function(failedReason){
			 	defer.reject(failedReason);
			});
					
			return defer.promise;
		};
	

	return loginFact;

}]);