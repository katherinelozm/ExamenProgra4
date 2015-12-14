angular.module('SantaClaus.Services').factory('GiftService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://Katherines-MacBook-Pro.local:8000';
		return {
				GetGifts: function(){
					return $http.get(baseUrl + "v1/gifts");
				},
				PostGift: function(payload){
					return $http.post(baseUrl + "v1/gift", payload);
				}
	    };
}]);
