'use strict';

angular.module('htApp')
.filter('calcPercentage', ['$filter', 
	function ($filter) {
		return function (input, decimals, total) {
			var percentage = input / total * 100;

			return $filter('number')(percentage, decimals) * 1;
		};
	}
])

.filter('ifEmpty', [ 
	function () {
		return function (value, content) {
			return angular.isUndefined(value) || value === null ? content : value;
		};
	}
])

.filter('capKeyAbbrs', [ 
	function () {
		return function (value, content) {
			var keyAbbrs = [
				'sql',
				'it'
			];

			for(var i=0; i < keyAbbrs.length; i++){
				value = value.replace(keyAbbrs[i], keyAbbrs[i].toUpperCase());
			};
			
			return value;
		};
	}
])
.filter('capitalize', function() {
    return function(input, all) {
        
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){
          //alert(txt);
          if(txt.indexOf('IN') >= 0){
            return txt.toLowerCase() ;
          }else if(txt.indexOf('FROM') >= 0){
            return txt.toLowerCase() ;
          }else if(txt.indexOf('MOTS') >= 0){
            return txt.toUpperCase() ;
          }else{
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
          
          }) : '';
          
    }
  });