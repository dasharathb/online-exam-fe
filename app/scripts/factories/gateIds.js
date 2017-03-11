'use strict';
angular.module('htApp')
.factory('gateFactId',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var gateFactId = {};
	gateFactId.getGateIds=function(){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'gateId');
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
	

	return gateFactId;

}])
.factory('viewGateFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var viewGateFact = {};
	viewGateFact.getPapers=function(id){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'gateview');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
				params:{
					gateview:id
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
	

	return viewGateFact;

}]);
