var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope, $routeParams) {
    $scope.somedata = $routeParams.params
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'view.html', controller: 'MainController' })
        // .when('/test', { redirectTo: '/test/nomatch' }) // primeira forma
        .when('/test', {
            redirectTo: function(routeParams, path, search) {
                console.log(routeParams, path, search)
                return '/test/' + search.url
            }
        }) // primeira forma
        .when('/test/:params', { templateUrl: 'view2.html', controller: 'MainController' }) //test/?url=ronaldo.com
        .otherwise({ template: "sem rota" })
})