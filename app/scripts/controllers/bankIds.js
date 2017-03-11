'use strict';
angular.module('htApp')
.controller('bankIdCntrl',['$rootScope', '$scope', '$location','$routeParams','bankFactId','viewBankFact',
	function($rootScope, $scope, $location,$routeParams,bankFactId,viewBankFact){
	
		

		$scope.getBankId=function(){
			bankFactId.getBankIds().then(function(data){
                  console.log("::::rrb data",data);
                  $scope.rrbData=data;


			});
		}

		$scope.viewPaper=function(ids){
			$location.path('/qpapers/'+ids);
			viewBankFact.getPapers(ids).then(function(data){
             	$scope.questionPapers = data;
				$rootScope.examName = $scope.questionPapers.id;

				console.log("questionPapersRRB.......",$scope.examName);
				$rootScope.questionPaper = $scope.questionPapers.questions;
				console.log("getExamPaperRRB...........",$rootScope.questionPaper);

        	});
		}
        $scope.init=function(){
        	$scope.getBankId();
        }
  
		$scope.init();
	
}]);