var app = angular.module('app', []);

app.controller('MainController', function($scope, constService, valService){
  console.log(constService);
  console.log(constService.attr);

  console.log(valService());
});

app.constant('constService', {attr: "isso eh uma contante"});
//cannot be change by decorator

app.value('valService', function(){return "isso eh valor"});
// can be modified by decorator

// Servive types
//   Constants
//   Values
//   Factories
//   Services
//   Providers
//   Decorators
