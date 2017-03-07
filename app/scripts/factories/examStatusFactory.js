'use strict';
angular.module('htApp')
.factory('examStatusFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var examStatusFact = {};
	examStatusFact.saveStatus=function(examStatus){
        console.log('loginserver::::',examStatus);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'examStatus');
		console.log('serviceURI',serviceURI);
		//var serviceURI = "./../../json/login.json";
			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					examStatus:examStatus
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
	

	return examStatusFact;

}]);