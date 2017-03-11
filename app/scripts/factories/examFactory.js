'use strict';
angular.module('htApp')
.factory('examFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var examFact = {};
	examFact.getExamPaper=function(emailId){
		console.log(":::::::::: emailId",emailId);
		


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'getPaper');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
				params:{
					emailId:emailId
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
	

	return examFact;

}]);