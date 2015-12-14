angular.module('SantaClaus.Services').factory('AuthService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://Katherines-MacBook-Pro.local:8000';
		return {
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
		        Register: function(payload){
		          return $http.post(baseUrl + "v1/register", payload);
		        }
	    };
}]);
