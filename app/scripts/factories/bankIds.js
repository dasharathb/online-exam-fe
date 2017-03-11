'use strict';
angular.module('htApp')
.factory('bankFactId',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var bankFactId = {};
	bankFactId.getBankIds=function(){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'bankId');
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
	

	return bankFactId;

}])
.factory('viewBankFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var viewBankFact = {};
	viewBankFact.getPapers=function(id){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'bankview');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
				params:{
					bankview:id
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
	

	return viewBankFact;

}]);
