'use strict';
angular.module('htApp')
.factory('bankPaperFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var bankPaperFact = {};
	bankPaperFact.saveBankPaper=function(bankPaper){
        console.log('questionserver::::',bankPaper);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'bankPaper');
		console.log('serviceURI',serviceURI);
		//var serviceURI = "./../../json/login.json";

			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					bankPaper:bankPaper
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
	

	return bankPaperFact;

}]);