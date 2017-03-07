'use strict';
angular.module('htApp')
.controller('newPaperCntrl',['$scope','qPaperFact',
	function($scope,qPaperFact){
		$scope.count=1;
		$scope.questions=[];
		$scope.AddMoreQuestion = function(){
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
			$scope.qCount= ++$scope.count;
			document.getElementById('textId').value = '';
			document.getElementById('textId1').value = '';
			document.getElementById('textId2').value = '';
			document.getElementById('textId3').value = '';
			document.getElementById('textId4').value = '';
			document.getElementById('textId5').value = '';
			console.log('questions and question numbers',$scope.questions,$scope.qCount);
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
      	$('#confirmModal').modal('hide');
      	qPaperFact.saveQuestionPaper(questionPaper).then(function(data){
      		console.log('questions controller.....',data);

      	});
      }

	}]);