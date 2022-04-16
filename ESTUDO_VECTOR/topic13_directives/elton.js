var app = angular.module('app', []);

app.controller('MainController', function($scope) {
    $scope.photo = {
        url: "http://upload.wikemedia.org/wikipedia/en/7/75/DowntownSF.jpg",
        date: "January 1, 2014"
    }
});

app.directive('photo', function() {
    return {
        restrict: "E",
        template: '<figure>' +
            '<img width="500px" ng-src="{{photoSrc}}"/>' +
            '<figcaption>{{caption}}</figcaption>' +
            '</figure>',
        replace: true,
        scope: {
            caption: '@',
            photoSrc: '@'
        }
    }
})