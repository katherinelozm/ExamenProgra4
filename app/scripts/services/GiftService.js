angular.module('SantaClaus.Services').factory('GiftService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'katherine-lozano-backend.herokuapp.com';
		return {
				GetGifts: function(){
					return $http.get(baseUrl + "v1/gifts");
				},
				PostGift: function(payload){
					return $http.post(baseUrl + "v1/gift", payload);
				}
	    };
}]);
