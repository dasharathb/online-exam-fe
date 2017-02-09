'use strict';
angular.module('htApp')
.factory('examFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var examFact = {};
	examFact.getExamPaper=function(emailId){


		var defer = $q.defer();
		//var serviceURI = getServiceURI.build('mor', 'account');
		var serviceURI = "./../../json/exam.json";

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
	

	return examFact;

}]);