angular.module('SantaClaus.Controllers')
  .controller('GiftsController', ['AuthService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
      $scope.gift = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.postGifts = function(){
        HomeService.PostGifts($scope.gift).then(function(response){
          alert("Posted to /Gifts");
          $scope.getGifts();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.getGifts = function(){
        HomeService.GetGifts().then(function(response){
          $scope.gifts = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
  }]);
