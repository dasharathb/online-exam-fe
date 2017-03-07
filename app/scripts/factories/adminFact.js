'use strict';
angular.module('htApp')
.factory('viewPaperFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var viewPaperFact = {};
	viewPaperFact.getPapers=function(view){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'viewPaper');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
				params:{
					papers:view
				}
			}).then(function(data){
				defer.resolve(data.data);
				console.log("question......",data);
			},
			 function(failedReason){
			 	defer.reject(failedReason);
			});
					
			return defer.promise;
		};
	

	return viewPaperFact;

}]);