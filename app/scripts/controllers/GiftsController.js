angular.module('SantaClaus.Controllers')
  .controller('GiftsController', ['GiftService', '$scope', '$rootScope',  function (GiftService, $scope, $rootScope) {
      $scope.gift = {};

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

      $scope.AddGifts = function(){
        $state.go('addgifts')
      }

      $scope.EditGifts = function(){
        $state.go('editgifts')
      }

      $scope.ViewPendingGifts = function(){
        $state.go('viewpendinggifts')
      }  

      $scope.ViewDeliveredGifts = function(){
        $state.go('viewdeliveredgifts')
      }      
  }]);
