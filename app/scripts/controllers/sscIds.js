'use strict';
angular.module('htApp')
.controller('sscIdCntrl',['$rootScope', '$scope', '$location','$routeParams','sscFactId','viewSSCFact',
	function($rootScope, $scope, $location,$routeParams,sscFactId,viewSSCFact){
	
		

		$scope.getSSCId=function(){
			sscFactId.getSSCIds().then(function(data){
                  console.log("::::rrb data",data);
                  $scope.rrbData=data;


			});
		}

		$scope.viewPaper=function(ids){
			$location.path('/qpapers/'+ids);
			viewSSCFact.getPapers(ids).then(function(data){
             	$scope.questionPapers = data;
				$rootScope.examName = $scope.questionPapers.id;

				console.log("questionPapersRRB.......",$scope.examName);
				$rootScope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaperRRB...........",$rootScope.questionPaper);

        	});
		}
        $scope.init=function(){
        	$scope.getSSCId();
        }
  
		$scope.init();
	
}]);