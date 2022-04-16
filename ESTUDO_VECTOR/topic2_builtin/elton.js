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

app.controller('MainController', function($scope) {
    $scope.myarr = [1, 2, 3, 4, 5, 5]
    $scope.obj = { "id": 1, "nome": "Elton", "altura": 1.70 }
    $scope.users = [{
            "_id": "624884d86dd37b4ca04db1dc",
            "index": 0,
            "guid": "8d0bb5f7-f2fd-4e2a-b25e-4fff16619001",
            "isActive": true,
            "balance": "$2,879.68",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "brown",
            "name": "Rivers Guerra",
            "gender": "male",
            "company": "GUSHKOOL",
            "email": "riversguerra@gushkool.com",
            "phone": "+1 (987) 484-2014",
            "address": "606 Nolans Lane, Cannondale, Florida, 5910",
            "about": "Ullamco elit dolore culpa dolor ullamco amet sit proident ullamco ipsum eu exercitation incididunt velit. Nisi consequat magna labore reprehenderit cillum elit cupidatat enim. Duis aliqua aute ut irure. Anim officia dolore tempor non qui voluptate velit dolor aliquip ipsum ipsum irure.\r\n",
            "registered": "2016-03-12T03:00:58 +03:00",
            "latitude": -59.35984,
            "longitude": -158.363056,
            "tags": [
                "adipisicing",
                "ex",
                "fugiat",
                "adipisicing",
                "minim",
                "tempor",
                "proident"
            ],
            "friends": [{
                    "id": 0,
                    "name": "Oneil Martinez"
                },
                {
                    "id": 1,
                    "name": "Katy King"
                },
                {
                    "id": 2,
                    "name": "Karen Chen"
                }
            ],
            "greeting": "Hello, Rivers Guerra! You have 9 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "624884d80d49dc91f46f5c10",
            "index": 1,
            "guid": "c1321350-4bbd-47b3-aab9-23e8da94ba51",
            "isActive": true,
            "balance": "$2,797.73",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "eyeColor": "brown",
            "name": "Christine Chase",
            "gender": "female",
            "company": "BALOOBA",
            "email": "christinechase@balooba.com",
            "phone": "+1 (853) 589-2615",
            "address": "719 Lafayette Walk, Grapeview, Rhode Island, 988",
            "about": "Irure et deserunt deserunt occaecat duis ad. Et tempor laborum Lorem sunt officia dolore consectetur ut. Et ipsum deserunt consectetur sit minim non. Est in qui eu et commodo aliqua qui reprehenderit laborum. Irure magna sunt Lorem anim ullamco.\r\n",
            "registered": "2021-09-28T03:30:43 +03:00",
            "latitude": -35.922626,
            "longitude": -138.041213,
            "tags": [
                "Lorem",
                "nulla",
                "enim",
                "elit",
                "excepteur",
                "dolor",
                "reprehenderit"
            ],
            "friends": [{
                    "id": 0,
                    "name": "Steele Whitney"
                },
                {
                    "id": 1,
                    "name": "Carey Fulton"
                },
                {
                    "id": 2,
                    "name": "Lucille Mccall"
                }
            ],
            "greeting": "Hello, Christine Chase! You have 4 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "624884d8a646b418131a60d6",
            "index": 2,
            "guid": "f3b3f353-aa42-4cec-9a6e-1fe7d1a2d31d",
            "isActive": false,
            "balance": "$1,265.99",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "green",
            "name": "Huffman Barlow",
            "gender": "male",
            "company": "FARMEX",
            "email": "huffmanbarlow@farmex.com",
            "phone": "+1 (892) 547-2886",
            "address": "422 Lott Place, Greer, New Jersey, 1658",
            "about": "Est deserunt tempor ut ipsum Lorem elit laboris tempor quis aliquip. Duis ad exercitation proident occaecat. Consequat mollit aliqua ad consectetur qui cillum eiusmod dolor ullamco. Non aliqua elit adipisicing occaecat proident commodo pariatur ipsum amet reprehenderit voluptate reprehenderit. Anim anim dolor consectetur incididunt quis id eu anim aliquip magna minim.\r\n",
            "registered": "2020-05-20T05:41:26 +03:00",
            "latitude": 12.919942,
            "longitude": -117.314053,
            "tags": [
                "aute",
                "qui",
                "pariatur",
                "cillum",
                "sit",
                "non",
                "nulla"
            ],
            "friends": [{
                    "id": 0,
                    "name": "Francis Contreras"
                },
                {
                    "id": 1,
                    "name": "Sue Waller"
                },
                {
                    "id": 2,
                    "name": "Glenna Patrick"
                }
            ],
            "greeting": "Hello, Huffman Barlow! You have 3 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "624884d82d570ea46d646f63",
            "index": 3,
            "guid": "10b99d71-1b0a-4168-b3fe-2c21c8cb3e0b",
            "isActive": false,
            "balance": "$1,718.98",
            "picture": "http://placehold.it/32x32",
            "age": 26,
            "eyeColor": "green",
            "name": "Brooke Mcfadden",
            "gender": "female",
            "company": "BUZZMAKER",
            "email": "brookemcfadden@buzzmaker.com",
            "phone": "+1 (892) 452-3373",
            "address": "396 Highlawn Avenue, Wakulla, Federated States Of Micronesia, 468",
            "about": "Fugiat ipsum eu sint sunt non qui non deserunt commodo amet ipsum sunt proident. Culpa nostrud sunt id ullamco veniam nulla non dolor sit laboris amet minim eiusmod ad. Ea ea est eu voluptate Lorem officia magna adipisicing.\r\n",
            "registered": "2020-11-15T06:26:33 +03:00",
            "latitude": -85.027898,
            "longitude": -145.906773,
            "tags": [
                "aliquip",
                "elit",
                "fugiat",
                "commodo",
                "cillum",
                "adipisicing",
                "officia"
            ],
            "friends": [{
                    "id": 0,
                    "name": "Houston Alexander"
                },
                {
                    "id": 1,
                    "name": "Turner Anderson"
                },
                {
                    "id": 2,
                    "name": "Isabelle Parks"
                }
            ],
            "greeting": "Hello, Brooke Mcfadden! You have 5 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "624884d8f4ac33798bd225ca",
            "index": 4,
            "guid": "4988be3c-11a2-4935-b6f3-0aae82fc7694",
            "isActive": false,
            "balance": "$3,477.43",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "green",
            "name": "Eddie Byers",
            "gender": "female",
            "company": "NETBOOK",
            "email": "eddiebyers@netbook.com",
            "phone": "+1 (978) 412-3631",
            "address": "568 Kane Place, Cartwright, Virginia, 999",
            "about": "Lorem irure culpa sit ullamco eiusmod. Enim veniam culpa non laborum elit eiusmod ea culpa adipisicing mollit do deserunt. Qui nostrud proident pariatur sint anim aute nulla. Laboris cupidatat officia ut enim magna nostrud do nostrud reprehenderit sint sit aute.\r\n",
            "registered": "2014-05-12T07:54:57 +03:00",
            "latitude": -77.10982,
            "longitude": -104.020822,
            "tags": [
                "veniam",
                "velit",
                "ullamco",
                "id",
                "nostrud",
                "aliqua",
                "nulla"
            ],
            "friends": [{
                    "id": 0,
                    "name": "Holmes Wolfe"
                },
                {
                    "id": 1,
                    "name": "Lola Castaneda"
                },
                {
                    "id": 2,
                    "name": "Tracie Cabrera"
                }
            ],
            "greeting": "Hello, Eddie Byers! You have 4 unread messages.",
            "favoriteFruit": "apple"
        }
    ]
});