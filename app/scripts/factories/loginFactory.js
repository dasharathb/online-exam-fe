'use strict';
angular.module('htApp')
.factory('loginFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var loginFact = {};
	loginFact.getLoginDetails=function(login){
        console.log('loginserver::::',login);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'login');
		console.log('serviceURI',serviceURI);

			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					login:login
					}
			})
			.then(function(data){
				console.log('factory ::: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});
		
			return defer.promise;
		};
	

	return loginFact;

}]);