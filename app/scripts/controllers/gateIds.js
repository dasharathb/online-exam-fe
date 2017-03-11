'use strict';
angular.module('htApp')
.controller('gateIdCntrl',['$rootScope', '$scope', '$location','$routeParams','gateFactId','viewGateFact',
	function($rootScope, $scope, $location,$routeParams,gateFactId,viewGateFact){
	
		

		$scope.getGateId=function(){
			gateFactId.getGateIds().then(function(data){
                  console.log("::::rrb data",data);
                  $scope.rrbData=data;


			});
		}

		$scope.viewPaper=function(ids){
			$location.path('/qpapers/'+ids);
			viewGateFact.getPapers(ids).then(function(data){
             	$scope.questionPapers = data;
				$rootScope.examName = $scope.questionPapers.id;

				console.log("questionPapersRRB.......",$scope.examName);
				$rootScope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaperRRB...........",$rootScope.questionPaper);

        	});
		}
        $scope.init=function(){
        	$scope.getGateId();
        }
  
		$scope.init();
	
}]);