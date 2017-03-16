'use strict';
angular.module('htApp')
.controller('newPaperCntrl',['$scope','qPaperFact','$routeParams','$location',
	function($scope,qPaperFact,$routeParams,$location){
		$scope.count=1;
		$scope.questions=[];
		console.log('::::::::',$routeParams.paper);
		$scope.paperName=$routeParams.paper;
		$scope.AddMoreQuestion = function(){
			console.log("::::::",$scope.rrb);
			var newQuestionPaper={};
			newQuestionPaper.options={};
			newQuestionPaper.qNo=$scope.count;
			newQuestionPaper.question=$scope.question;
			newQuestionPaper.options.a=$scope.a;
			newQuestionPaper.options.b=$scope.b;
			newQuestionPaper.options.c=$scope.c;
			newQuestionPaper.options.d=$scope.d;
			newQuestionPaper.answer=$scope.actualAns;
			
			
		
			$scope.questions.push(newQuestionPaper);
			$scope.qCount=++$scope.count;

			document.getElementById('textId').value = '';
			document.getElementById('textId1').value = '';
			document.getElementById('textId2').value = '';
			document.getElementById('textId3').value = '';
			document.getElementById('textId4').value = '';
			document.getElementById('textId5').value = '';
			console.log('questions and question numbers',$scope.questions);
		}
		$scope.submitqno=function(){
			$('#confirmModal').modal({show : true,backdrop : false});
		}
		$scope.close=function(){
      	$('#confirmModal').modal('hide');
      }

      $scope.submit=function(){
      	//$('#confirmModal').modal('hide');
      	console.log('all questions....',$scope.questions);
      	var questionPaper = {};
      	questionPaper.questions = $scope.questions;
      	questionPaper.duration = $scope.duration;
      	console.log(":::::duration",questionPaper);
      	$('#confirmModal').modal('hide');
      	qPaperFact.saveQuestionPaper(questionPaper,$scope.rrb).then(function(data){
      		console.log('questions controller.....',data);
      		$scope.msg= data.message;
      		if($scope.msg.indexOf('successfully')>=0){
        		$location.path('/registrationStatus/'+$scope.msg);
        	}

      	});
      }

	}]);