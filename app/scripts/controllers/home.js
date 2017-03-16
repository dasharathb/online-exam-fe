'use strict';
angular.module('htApp')
.controller('homeCntr',['$scope','$location','examFact','examStatusFact','$rootScope', '$interval',
	function($scope,$location, examFact,examStatusFact,$rootScope, $interval){
		$scope.rightLeft =true;
		$scope.questionPapers=[];
		$scope.questionPaper;
		$scope.question = 0;
		$scope.marks= 0;
		$scope.ans = undefined;
		$scope.examName;
		$scope.mins=10;
		console.log("min::::",$scope.mins);
		$scope.hrs=60;
		 var login ={};
        
        var stop;
        $scope.min = function() {
          // Don't start a new fight if we are already fighting
          if ( angular.isDefined(stop) ) return;

          stop = $interval(function() {
            if ($scope.mins > 0 ) {
              $scope.mins = $scope.mins - 1;             
            } else {
              $scope.stopFight();
              $scope.submit();
            }
          }, 60000);
        };
        $scope.min();


        $scope.stopFight = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
          }
        };

		$scope.getExamPaper = function(){
			examFact.getExamPaper($rootScope.email).then(function(data){
				console.log('controller data ::::: ',data);
				if(data != "" ){
					$scope.questionPapers = data;
				$scope.examName = $scope.questionPapers.id;
				$scope.duration=$scope.questionPapers.duration;
				$scope.mins=$scope.duration;

				console.log("duration......",$scope.examName,$scope.mins);
				console.log("questionPapers.......",$scope.questionPapers);

				$scope.question = 0;
				$scope.questionPaper = $scope.questionPapers.questions[$scope.question];
				console.log("getExamPaper...........",$scope.questionPaper);	
				$scope.message = "";
				}else{
					$scope.message = "You have completed all papers.";
				}
				
             });
	  }
		$scope.qnoButtons = function(qno){
			console.log('this is answer button',qno);
			$scope.questionPaper = $scope.questionPapers.questions[qno-1];
			//$scope.ans = $scope.answers[qno-1];
			$scope.question = qno-1;
		}

		//$scope.answers=[];
		$scope.savenextQuestion = function(qno){
			console.log(":::::>>>>",qno,$scope.ans);
			console.log(':::',$scope.question ,' <', $scope.questionPapers.questions.length-1);
			if (parseInt($scope.question) < parseInt($scope.questionPapers.questions.length-1) ) {
				console.log('....',$scope.questionPapers.questions[$scope.question]);		
				if($scope.ans == undefined && $scope.questionPapers.questions[$scope.question].ans == undefined){
					$('#ans'+qno).addClass('notAns');					
				}else {
					$('#ans'+qno).removeClass('notAns');
					$('#ans'+qno).addClass('ans');
					if($scope.ans==$scope.questionPaper.answer){
						console.log($scope.ans,$scope.questionPaper.answer)
						$scope.marks=$scope.marks+1;
						console.log("marks::::",$scope.marks);
					}
					else{
						console.log("no marks");
					}

			
				}

				if($scope.questionPapers.questions[$scope.question].ans == undefined){
					$scope.questionPapers.questions[$scope.question].ans = $scope.ans;
				}

					
				$scope.question = $scope.question+1;
				$scope.questionPaper = $scope.questionPapers.questions[$scope.question];
				$scope.ans = undefined;

			}else if($scope.question == ($scope.questionPapers.questions.length-1)){
				console.log(qno,'::::last ::: ',$scope.ans,$scope.questionPapers.questions[$scope.question].ans);
				if($scope.ans == undefined  && $scope.questionPapers.questions[$scope.question].ans == undefined){
					$('#ans'+qno).addClass('notAns');
				}else{
					$('#ans'+qno).removeClass('notAns')
					$('#ans'+qno).addClass('ans');
					if($scope.ans==$scope.questionPaper.answer){
						console.log($scope.ans,$scope.questionPaper.answer)
						$scope.marks=$scope.marks+1;
						console.log("marks::::",$scope.marks);
					}
					else{
						console.log("no marks");
						
					}

				}
				if($scope.questionPapers.questions[$scope.question].ans == undefined){
					$scope.questionPapers.questions[$scope.question].ans = $scope.ans;
				}
			}
			

		}
		$scope.markForReview = function(qno){
			console.log('aaaaaaaaaaaaaaa');
			if (parseInt($scope.question) < parseInt($scope.questionPapers.questions.length-1) ) {
				$scope.question = $scope.question+1;
				$scope.questionPaper = $scope.questionPapers.questions[$scope.question];
				console.log("$scope.ans :::::::::: ",$scope.ans);
				if($scope.ans == undefined){
					$('#ans'+qno).addClass('notAns');
				}else{
					$('#ans'+qno).removeClass('notAns');
					$('#ans'+qno).addClass('ansForReview');

				}
			}else if($scope.question == ($scope.questionPapers.questions.length-1)){
				console.log(qno,'::::last ::: ',$scope.ans);
				if($scope.ans == undefined ){
					$('#ans'+qno).addClass('notAns');
				}else{
				    
				    
				    $('#ans'+qno).removeClass('notAns')
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
			$rootScope.urAns=$scope.ans;
			
			//console.log($('#ans'+qno));
			
		}
		$scope.submit=function(emailId){
			var examStatus = {};
			$scope.status="completed";
			examStatus.emailId=emailId;
			examStatus.examName=$scope.examName;
            examStatus.status=$scope.status;
            console.log("examStatus.....",examStatus);
            examStatusFact.saveStatus(examStatus).then(function(data){
            	$location.path('/result/'+$scope.marks+'/'+$scope.examName);

            });



		}	


		$scope.init = function(){
			$scope.getExamPaper();

		}
		$scope.init();
	}]);
