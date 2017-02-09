angular.module('htApp')
.service('getServiceURI', ['$log', 'ENV', 
	function($log, ENV) {
		var serviceURIs = ENV.services.uri,
			serviceEndpoints = ENV.services.endpoints;

		this.all = function(){
			return serviceEndpoints;
		};

		this.build = function(service, endpoint){
			//TODO: validate better
			if(serviceEndpoints[service][endpoint]){
				return serviceURIs[service] + serviceEndpoints[service][endpoint];
			} else {
				$log.error('Could not find endpoint ' + endpoint + ' inside service list. Use getServiceURI.all() to get list all services.');
				return undefined;
			}
		};

	}
]);