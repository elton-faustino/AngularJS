var app = angular.module('app', []);

/*app.controller('MainController', function($scope, constService, valService, twitterAPI){
  console.log(constService)
  console.log(valService)

  twitterAPI.url = "newurl"
  console.log(twitterAPI)
})*/

app.controller('MainController', function($scope, myFactory){
  console.log(myFactory)
  console.log(myFactory.getdata())
})

app.factory('myFactory', function(){
  return {
    mydata : "this is some data",
    getdata: function(){
      return this.mydata
    }
  }
})

app.constant('twitterAPI', {url: "api.twitter.com/v1/"})

/*cannot be modified by decorators*/
app.constant('constService', {attr: "this is const data!"})

/*can be modified by decorators*/
app.value('valService', function(){ return "this is return from a fn"})

/*app.controller('MainController', function($scope, TwitterService){
  TwitterService.tweet('I am tweeting this')
})*/

/*Services Types
  Constats
  Values
  Factories
  Services
  Provides
  Decoratos*/
