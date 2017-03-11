'use strict';
angular.module('htApp')
.controller('rrbIdCntrl',['$rootScope', '$scope', '$location','$routeParams','rrbFactId','viewRRBFact',
	function($rootScope, $scope, $location,$routeParams,rrbFactId,viewRRBFact){
	
		

		$scope.getRRBId=function(){
			rrbFactId.getRRBIds().then(function(data){
                  console.log("::::rrb data",data);
                  $scope.rrbData=data;


			});
		}

		$scope.viewPaper=function(ids){
			$location.path('/qpapers/'+ids);
			viewRRBFact.getPapers(ids).then(function(data){
             	$scope.questionPapers = data;
				$rootScope.examName = $scope.questionPapers.id;

				console.log("questionPapersRRB.......",$scope.examName);
				$rootScope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaperRRB...........",$rootScope.questionPaper);

        	});
		}
        $scope.init=function(){
        	$scope.getRRBId();
        }
  
		$scope.init();
	
}]);