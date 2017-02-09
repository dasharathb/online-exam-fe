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
        
        
        .otherwise({
            redirectTo: '/error'
        });
    }
]);
