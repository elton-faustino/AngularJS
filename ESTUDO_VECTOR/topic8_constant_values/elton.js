var app = angular.module('app', []);

app.controller('MainController', function($scope, $filter,
    constService,
    valueService) {;
    console.log(constService.attr);
    console.log(valueService.call());
});

// can NOT be modified by a decorator
app.constant('constService', { attr: 'this is const data' });
// CAN be modified by a decorator
app.value('valueService', function() {
    return 'meu nome eh elton';
});