'use strict';
angular.module('htApp')
.factory('qPaperFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var qPaperFact = {};
	qPaperFact.saveQuestionPaper=function(qPaper){
        console.log('questionserver::::',qPaper);

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'qPaper');
		console.log('serviceURI',serviceURI);
		//var serviceURI = "./../../json/login.json";

		/*$http({
				method: 'GET',
				url: serviceURI
			}).then(function(data){
				defer.resolve(data.data);
			},
			 function(failedReason){
			 	defer.reject(failedReason);
			});
					
			return defer.promise;
		};*/

			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					qnPaper:qPaper
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
	

	return qPaperFact;

}]);