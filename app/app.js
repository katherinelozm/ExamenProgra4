var app = angular.module('SantaClaus', ['ui.router', 'ngStorage', 'SantaClaus.Services', 'SantaClaus.Controllers']);

angular.module('SantaClaus.Controllers', []);
angular.module('SantaClaus.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'GiftsController'
        })
        .state('addgifts', {
            url: '/addgifts',
            templateUrl: '/views/addgifts.html',
            controller: 'GiftsController'
        })
        .state('editgifts', {
            url: '/editgifts',
            templateUrl: '/views/editgifts.html',
            controller: 'GiftsController'
        })
        .state('viewpendinggifts', {
            url: '/viewpendinggifts',
            templateUrl: '/views/viewpendinggifts.html',
            controller: 'GiftsController'
        })
        .state('viewdeliveredgifts', {
            url: '/viewdeliveredgifts',
            templateUrl: '/views/viewdeliveredgifts.html',
            controller: 'GiftsController'
        });
}])
