var app = angular.module('app', []);

app.controller('MainController', function($scope, TwitterService){
  TwitterService.tweet('I am tweeting this');
});

app.controller('MainController', function($scope, Users){
  Users.all()
  Users.find('id')
});

// Servive types
//   Constants
//   Values
//   Factories
//   Services
//   Providers
//   Decorators
