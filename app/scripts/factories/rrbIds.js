'use strict';
angular.module('htApp')
.factory('rrbFactId',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var rrbFactId = {};
	rrbFactId.getRRBIds=function(){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'rrbId');
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
	

	return rrbFactId;

}])
.factory('viewRRBFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var viewRRBFact = {};
	viewRRBFact.getPapers=function(id){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'rrbview');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
				params:{
					rrbview:id
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
	

	return viewRRBFact;

}]);
