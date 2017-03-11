'use strict';
angular.module('htApp')
.factory('sscFactId',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var sscFactId = {};
	sscFactId.getSSCIds=function(){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'sscId');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
			}).then(function(data){
				defer.resolve(data.data);
				console.log("RRB......",data);
			},
			 function(failedReason){
			 	defer.reject(failedReason);
			});
					
			return defer.promise;
		};
	

	return sscFactId;

}])
.factory('viewSSCFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var viewSSCFact = {};
	viewSSCFact.getPapers=function(id){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'sscview');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
				params:{
					sscview:id
				}
			}).then(function(data){
				defer.resolve(data.data);
				console.log("RRB......",data);
			},
			 function(failedReason){
			 	defer.reject(failedReason);
			});
					
			return defer.promise;
		};
	

	return viewSSCFact;

}]);
