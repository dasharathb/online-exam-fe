'use strict';
angular.module('htApp')
.factory('qpFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var qpFact = {};
	qpFact.getExamPaper=function(){


		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'qpId');
		//var serviceURI = "./../../json/exam.json";

		$http({
				method: 'GET',
				url: serviceURI,
			}).then(function(data){
				defer.resolve(data.data);
				console.log("question......",data);
			},
			 function(failedReason){
			 	defer.reject(failedReason);
			});
					
			return defer.promise;
		};
	

	return qpFact;

}]);