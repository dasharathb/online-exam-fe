'use strict';
angular.module('htApp')
.factory('qPaperFact',['$http','$q','$location','getServiceURI',function($http,$q,$location,getServiceURI){
	var qPaperFact = {};
	qPaperFact.saveQuestionPaper=function(qPaper,paper){
        console.log('questionserver::::',qPaper,paper);
        

		var defer = $q.defer();
		var serviceURI = getServiceURI.build('online', 'qPaper');
		if(paper == "RRB"){
        	serviceURI = getServiceURI.build('online', 'rrbPaper');
        }else if(paper == "SSC"){
        	serviceURI = getServiceURI.build('online', 'sscPaper');
        }else if(paper == "GATE"){
        	serviceURI = getServiceURI.build('online', 'gatePaper');
        }else if(paper == "BANK"){
        	serviceURI = getServiceURI.build('online', 'bankPaper');
        }
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