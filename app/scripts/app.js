'use strict';

/**
 * @ngdoc overview
 * @name mvrApp
 * @description
 * # mvrApp
 *
 * Main module of the application.
 */
angular.module('htApp', [
    'config',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
])
.run(['$window', '$rootScope', '$location', '$route', '$routeParams', 
  function($window, $rootScope, $location, $route, $routeParams){
     
        $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
                 
        });
        $rootScope.$on('$routeChangeError', function (event, next, current, rejection) {
            
        });
  }
])
.config(['$routeProvider', '$compileProvider', '$locationProvider',
    function ($routeProvider, $compileProvider, $locationProvider) {
        
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|qto):/);
        //$locationProvider.html5Mode(true); 

        $routeProvider
        .when('/onlineExam', {
            templateUrl: 'views/templates/login.html',
            controller: 'lCntrl',
        })
        .when('/exam', {
            templateUrl: 'views/templates/home.html',
            controller: 'homeCntr',
            
        })
         .when('/', {
            templateUrl: 'views/templates/onlineExam.html',
            controller: 'onlineExameCntrl',
            
        })
          .when('/registration', {
            templateUrl: 'views/templates/registration.html',
            controller: 'regCntrl',
            
        })
         .when('/registrationStatus/:msg', {
            templateUrl: 'views/templates/registrationStatus.html',
            controller: 'regSucCntrl',
            
        })
        .when('/admin', {
        templateUrl: 'views/templates/admin.html',
        controller: 'adminCntrl',
            
        })
         .when('/newPaper', {
        templateUrl: 'views/templates/newQuestionPaper.html',
        controller: 'newPaperCntrl',
            
        })
         .when('/qpapers/:view', {
        templateUrl: 'views/templates/questionPapers.html',
        controller: 'qpCntrl',
            
        })
          .when('/result/:marks/:examName', {
        templateUrl: 'views/templates/result.html',
        controller: 'resultCntrl',
            
        })
           .when('/rrbPaper/:paper', {
        templateUrl: 'views/templates/rrbPaper.html',
        controller: 'rrbCntrl',
            
        })
            .when('/sscPaper/:paper', {
        templateUrl: 'views/templates/sscPaper.html',
        controller: 'sscCntrl',
            
        })
             .when('/gatePaper/:paper', {
        templateUrl: 'views/templates/gatePaper.html',
        controller: 'gateCntrl',
            
        })
              .when('/bankPaper/:paper', {
        templateUrl: 'views/templates/bankPaper.html',
        controller: 'bankCntrl',
            
        })
        .when('/rrbId', {
        templateUrl: 'views/templates/rrbId.html',
        controller: 'rrbIdCntrl',
            
        })
        .when('/sscId', {
        templateUrl: 'views/templates/sscId.html',
        controller: 'sscIdCntrl',
            
        })
        .when('/gateId', {
        templateUrl: 'views/templates/gateId.html',
        controller: 'gateIdCntrl',
            
        })
        .when('/bankId', {
        templateUrl: 'views/templates/bankId.html',
        controller: 'bankIdCntrl',
            
        })
        
        .otherwise({
            redirectTo: '/error'
        });
    }
]);
