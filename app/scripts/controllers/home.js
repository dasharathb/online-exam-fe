'use strict';
angular.module('htApp')
.controller('homeCntr',['$scope','$location','examFact',
	function($scope,$location, examFact){
		$scope.rightLeft =true;
		$scope.questionPapers=[];
		$scope.questionPaper={};
		$scope.question = 0;
		$scope.mark = 0;
		$scope.ans = undefined;

		$scope.getExamPaper = function(){
			examFact.getExamPaper().then(function(data){
				console.log('controller data ::::: ',data);
				$scope.questionPapers = data;
				$scope.question = 0;
				$scope.questionPaper = $scope.questionPapers[$scope.question];
				$scope.answer=$scope.questionPaper.answer.mark;
				console.log('json answer :::::::',$scope.answer);

			});
		}
		$scope.qnoButtons = function(qno){
			console.log('this is answer button',qno);
			$scope.questionPaper = $scope.questionPapers[qno-1];
			//$scope.ans = $scope.answers[qno-1];
			$scope.question = qno-1;
		}

		//$scope.answers=[];
		$scope.savenextQuestion = function(qno){
			console.log(':::',$scope.question ,' <', $scope.questionPapers.length-1);
			if ($scope.question < ($scope.questionPapers.length-1) ) {
						
				if($scope.ans == undefined && $scope.questionPapers[$scope.question].ans == undefined){
					$('#ans'+qno).addClass('notAns');					
				}else {
					$('#ans'+qno).removeClass('notAns');
					$('#ans'+qno).addClass('ans');
			
				}
				if($scope.questionPapers[$scope.question].ans == undefined){
					$scope.questionPapers[$scope.question].ans = $scope.ans;
				}
					
				$scope.question = $scope.question+1;
				$scope.questionPaper = $scope.questionPapers[$scope.question];
				$scope.ans = undefined;

			}else if($scope.question == ($scope.questionPapers.length-1)){
				console.log(qno,'::::last ::: ',$scope.ans);
				if($scope.ans == undefined  && $scope.questionPapers[$scope.question].ans == undefined){
					$('#ans'+qno).addClass('notAns');
				}else{
					$('#ans'+qno).removeClass('notAns')
					$('#ans'+qno).addClass('ans');
				}
				if($scope.questionPapers[$scope.question].ans == undefined){
					$scope.questionPapers[$scope.question].ans = $scope.ans;
				}
			}
		}
		$scope.markForReview = function(qno){
			console.log('aaaaaaaaaaaaaaa');
			if ($scope.question < ($scope.questionPapers.length-1) ) {
				$scope.question = $scope.question+1;
				$scope.questionPaper = $scope.questionPapers[$scope.question];
				console.log("$scope.ans :::::::::: ",$scope.ans);
				if($scope.ans == undefined){
					$('#ans'+qno).addClass('notAns');
				}else{
					$('#ans'+qno).addClass('ansForReview');

				}
			}else if($scope.question == ($scope.questionPapers.length-1)){
				console.log(qno,'::::last ::: ',$scope.ans);
				if($scope.ans == undefined){
					$('#ans'+qno).addClass('notAns');
				}else{
					$('#ans'+qno).removeClass('notAns');
					$('#ans'+qno).addClass('ans');
				}
			
			}
			
             $scope.ans = undefined;
		}

		$scope.clear=function(qno){
			$scope.ans = undefined;
			$('#ans'+qno).removeClass('ans');
			$('#ans'+qno).addClass('notAns');
		}
		$scope.minimizeRightPan = function(){
			$scope.rightLeft =false;
			$('#rightPan').hide();
			$('#leftPan').width('98%');
		}
		$scope.maxmizeRightPan = function(){
			$scope.rightLeft =true;
			$('#rightPan').show();
			$('#leftPan').width('78%');
		}
				
		$scope.answered = function(qno){
			console.log('student answer ::::::::',$scope.ans);
			//console.log($('#ans'+qno));
			
		}	


		$scope.init = function(){
			$scope.getExamPaper();
		}
		$scope.init();
	}]);
