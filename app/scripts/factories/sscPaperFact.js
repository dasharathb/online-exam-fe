'use strict';
angular.module('htApp')
.factory('sscPaperFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var sscPaperFact = {};
	sscPaperFact.saveSSCPaper=function(sscPaper){
        console.log('questionserver::::',sscPaper);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'sscPaper');
		console.log('serviceURI',serviceURI);
		//var serviceURI = "./../../json/login.json";

			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					sscPaper:sscPaper
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
	

	return sscPaperFact;

}]);