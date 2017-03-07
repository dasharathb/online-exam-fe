'use strict';
angular.module('htApp')
.controller('adminCntrl',['$scope','$location','qpFact','viewPaperFact','$rootScope',
	function($scope,$location,qpFact,viewPaperFact,$rootScope){
		$scope.questionPapers=[];
		$scope.questionPaper={};
		$scope.question = 0;
		console.log('aaaaaaaaaaaaaaaaaa');
		$scope.getPaperNo=function(){
			qpFact.getExamPaper().then(function(data){
				$scope.questionPaperNo=data;
				console.log('controller data ::::: ',$scope.questionPaperNo);

			});
		}
		$scope.newPaper=function(){
			$location.path('/newPaper');
		}
        $scope.viewPaper = function(view){
        	console.log(":::::::::::",view);
        	$location.path('/qpapers/'+view);

        	viewPaperFact.getPapers(view).then(function(data){
             	$scope.questionPapers = data;
				$rootScope.examName = $scope.questionPapers.id;

				console.log("questionPapers.......",$scope.examName);
				$rootScope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaper...........",$rootScope.questionPaper);

        	});
        }



		$scope.init = function(){
			$scope.getPaperNo();
		}
		$scope.init();

}]);