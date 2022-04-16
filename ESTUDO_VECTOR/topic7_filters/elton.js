// angular.module('app', []);

// deprecated
// var MainController = function($scope)
// {
//     $scope.val = "teste123";
//     $scope.getMyName = function()
//     {
//         return "My name is Elton";
//     }
// }

// adds the code on the entire applications
// var app = angular.module('app', []);

// app.controller('MainController', function($scope){
//     $scope.val = '10';
//     $scope.getMyName = function()
//     {
//         return "My name is Elton";
//     }
// });

// var app = angular.module('app', ['eltinho']);

// angular.module('eltinho', []).controller('MainController', function($scope){
//     $scope.count = 1;
//     $scope.even = false;

//     $scope.inc = function(){
//         $scope.count += 1;
//         $scope.even = $scope.count % 2 == 0;
//     }
// });

var app = angular.module('app', []);

app.controller('MainController', function($scope, $filter) {
    // $scope.mydata = { arr: ["jane", "jake", "steven", "hank"] }
    $scope.mydata = {
        arr: [
            { "name": "jane", "age": 24 }, { "name": "stevenson", "age": 30 }, { "name": "peter", "age": 7 }
        ]
    };

    console.log($filter('uppercase')('elton faustino de jesus'));
});

app.filter('idadeMinima', function() {
    return function(data, idade) {
        var filtered = [];
        if (!idade) {
            idade = 21;
        }

        for (i = 0; i < data.length; i++) {
            if (data[i].age > idade) {
                filtered.push(data[i]);
            }
        }

        return filtered;
    }
});

// app.filter('meuFiltro', function() {
//     return function(input, length) {
//         if (!length) {
//             length = 10
//         }
//         if (!input) {
//             return ''
//         }
//         console.log('input: ' + input);
//         console.log('length: ' + length);
//         console.log('input.length: ' + input.length);

//         if (input.length < length) {
//             return input
//         } else {
//             return input.substring(0, length) + '...';
//         }
//     }
// });