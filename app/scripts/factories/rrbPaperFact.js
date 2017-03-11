'use strict';
angular.module('htApp')
.factory('rrbFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var rrbFact = {};
	rrbFact.saveRRBPaper=function(rrbPaper){
        console.log('questionserver::::',rrbPaper);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'rrbPaper');
		console.log('serviceURI',serviceURI);
		//var serviceURI = "./../../json/login.json";

			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					rrbPaper:rrbPaper
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
	

	return rrbFact;

}]);