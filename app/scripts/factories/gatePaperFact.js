'use strict';
angular.module('htApp')
.factory('gatePaperFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var gatePaperFact = {};
	gatePaperFact.saveGatePaper=function(gatePaper){
        console.log('questionserver::::',gatePaper);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'gatePaper');
		console.log('serviceURI',serviceURI);
		//var serviceURI = "./../../json/login.json";

			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					gatePaper:gatePaper
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
	

	return gatePaperFact;

}]);