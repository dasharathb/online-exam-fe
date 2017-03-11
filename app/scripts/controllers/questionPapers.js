'use strict';
angular.module('htApp')
.controller('qpCntrl',['$scope','$location','viewPaperFact','$routeParams',
	function($scope,$location,viewPaperFact,$routeParams){
		console.log('11111111111111111aaaaaaaaaaaaaaaaaa');
		console.log('ad1.......',$routeParams.view);
		$scope.examName=$routeParams.view;

	     viewPaperFact.getPapers($scope.examName).then(function(data){
                if(data!=""){
             	$scope.questionPapers = data;
				$scope.examName = $scope.questionPapers.id;

				console.log("questionPapers.......",$scope.examName);
				$scope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaper...........",$scope.questionPaper);
            }else{
                $scope.message="there are no question papers";
                
            }

        	});
	     

		

}]);