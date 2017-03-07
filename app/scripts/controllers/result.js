'use strict';
angular.module('htApp')
.controller('resultCntrl',['$rootScope', '$scope', '$location','$routeParams','viewPaperFact',
	function($rootScope, $scope, $location,$routeParams,viewPaperFact){
		console.log("resulssss",$routeParams.marks,$routeParams.examName);
		$scope.marks =$routeParams.marks;
		$scope.examName=$routeParams.examName;

		$scope.viewPaper=function(viewPaper){
			console.log(":::::::::::",viewPaper);
        	$location.path('/qpapers/'+viewPaper);

        	viewPaperFact.getPapers(viewPaper).then(function(data){
             	$scope.questionPapers = data;
				$rootScope.examName = $scope.questionPapers.id;

				console.log("questionPapers.......",$scope.examName);
				$rootScope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaper...........",$rootScope.questionPaper);

        	});

		}
	
}]);