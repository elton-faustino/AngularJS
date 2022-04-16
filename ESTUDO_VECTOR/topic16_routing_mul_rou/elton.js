var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope, $routeParams) {
    console.log($routeParams);
    $scope.somedata = "This is some data! ".concat($routeParams.myparam)
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'view.html', controller: 'MainController' })
        // .when('/test/:myparam', { templateUrl: 'view2.html', controller: 'MainController' })
        .when('/test/:params', { templateUrl: 'view2.html', controller: 'MainController' }) //test/?url=ronaldo.com
        .otherwise({ template: "sem rota" })
})