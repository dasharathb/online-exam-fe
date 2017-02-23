'use strict';

angular.module('htApp')
.factory('regFactory', ['$http','$q', 'getServiceURI', 
	function( $http, $q, getServiceURI ){
	var regFactory = {};

		regFactory.getRegDetailes = function(register){
			console.log('aaaaaaaaaaaaaaaaaa');

			var defer = $q.defer();

			//var serviceURI = './json/register.json';
			var serviceURI = getServiceURI.build('online', 'regUser');
			console.log('serviceURI::::::::::::::::',serviceURI);
			console.log(register);
			$http({
				method: 'GET',
				url: serviceURI,
				params:	{
					userDtl:register
					}
			})
			.then(function(data){
				console.log('factory ::: ',data);
				defer.resolve(data.data);
			},
			 function(failedReason){						
				defer.reject(failedReason);
			});
		
			return defer.promise;
		};


	return regFactory;
}]);