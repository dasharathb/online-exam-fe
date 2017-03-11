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


        }
        $scope.createUserDetails=function(){
        		console.log("::::::::::::::::::::::::;");
        		$location.path('/registration');
        	}
        	$scope.RRB=function(){
        		$scope.paper="RRB";
        		console.log("::::::::::::::::::::::::;",$scope.paper);
        		$location.path('/rrbPaper/'+$scope.paper);

        	
        	}
        	$scope.SSC=function(){
        		$scope.paper="SSC";
        		console.log("::::::::::::::::::::::::;",$scope.paper);
        		$location.path('/sscPaper/'+$scope.paper);

        	
        	}
        	$scope.GATE=function(){
        		$scope.paper="GATE";
        		console.log("::::::::::::::::::::::::;",$scope.paper);
        		$location.path('/gatePaper/'+$scope.paper);

        	
        	}
        	$scope.BANK=function(){
        		$scope.paper="BANK";
        		console.log("::::::::::::::::::::::::;",$scope.paper);
        		$location.path('/bankPaper/'+$scope.paper);

        	
        	}



		$scope.init = function(){
			$scope.getPaperNo();
		}
		$scope.init();

}]);