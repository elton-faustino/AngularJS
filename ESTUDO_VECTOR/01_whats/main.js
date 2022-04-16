var app = angular.module('app', []);

app.controller('MainController', function($scope) {


    $scope.list = [{
        "_id": "624902b040612144946d3649",
        "index": 0,
        "guid": "d3bad728-1ad5-4bea-93e9-679d3c1e6d4d",
        "isActive": false,
        "balance": "$1,228.71",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "description": "Annmarie Fernandez",
        "gender": "female",
        "company": "TOYLETRY",
        "email": "annmariefernandez@toyletry.com",
        "phone": "+1 (830) 414-2974",
        "address": "175 Bijou Avenue, Jacksonwald, Louisiana, 8950",
        "about": "Amet reprehenderit enim cillum in consequat est est. Incididunt nisi laborum deserunt tempor mollit commodo. Nostrud Lorem amet aute amet consequat id elit sunt irure. Incididunt velit ad veniam magna est quis duis dolore. Aliquip irure Lorem ea nostrud ad deserunt. Sit magna qui sint velit amet dolor aute Lorem sit nisi. Cupidatat in commodo dolore amet tempor est aliquip labore cillum nulla dolore.\r\n",
        "registered": "2019-03-02T10:52:56 +03:00",
        "latitude": -69.415893,
        "longitude": 141.913463,
        "tags": [
            "ullamco",
            "voluptate",
            "qui",
            "cillum",
            "dolore",
            "pariatur",
            "deserunt"
        ],
        "friends": [{
                "id": 0,
                "name": "Green Bridges"
            },
            {
                "id": 1,
                "name": "Atkins Paul"
            },
            {
                "id": 2,
                "name": "Villarreal Rocha"
            }
        ],
        "greeting": "Hello, Annmarie Fernandez! You have 3 unread messages.",
        "favoriteFruit": "apple"
    }, {
        "_id": "624902b0bdff0a9751f3cc1a",
        "index": 1,
        "guid": "1104f202-be6b-4d8d-baf9-3621e0a7315a",
        "isActive": true,
        "balance": "$3,266.85",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "blue",
        "description": "Katrina Moore",
        "gender": "female",
        "company": "CABLAM",
        "email": "katrinamoore@cablam.com",
        "phone": "+1 (892) 596-2632",
        "address": "524 Coventry Road, Carlton, Indiana, 9241",
        "about": "Ullamco occaecat dolore laboris ullamco cillum Lorem qui cillum pariatur quis qui. In qui cillum esse irure sint proident nostrud qui dolor. Cupidatat laborum esse duis anim nisi voluptate officia Lorem aliqua sit laboris. Commodo id consequat dolore quis enim officia est veniam pariatur voluptate. Pariatur culpa nulla ea elit ea voluptate sint minim irure sit cupidatat aliquip eiusmod in. Proident proident non tempor magna aliquip nostrud labore exercitation ullamco consectetur culpa labore exercitation qui. Non laboris eiusmod sint sunt reprehenderit nisi velit amet Lorem exercitation est labore deserunt.\r\n",
        "registered": "2021-06-29T04:12:54 +03:00",
        "latitude": 74.584256,
        "longitude": -125.433993,
        "tags": [
            "qui",
            "cillum",
            "magna",
            "do",
            "cillum",
            "duis",
            "dolore"
        ],
        "friends": [{
                "id": 0,
                "name": "Washington Clarke"
            },
            {
                "id": 1,
                "name": "Cassandra Dejesus"
            },
            {
                "id": 2,
                "name": "Beach York"
            }
        ],
        "greeting": "Hello, Katrina Moore! You have 5 unread messages.",
        "favoriteFruit": "banana"
    }, {
        "_id": "624902b0ca8cee142718bfe3",
        "index": 2,
        "guid": "85220d71-7312-4849-b6ea-72744f1d2efe",
        "isActive": false,
        "balance": "$1,882.46",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "eyeColor": "blue",
        "description": "Rivers Morton",
        "gender": "male",
        "company": "SUSTENZA",
        "email": "riversmorton@sustenza.com",
        "phone": "+1 (958) 448-3123",
        "address": "371 Arkansas Drive, Alfarata, Idaho, 9357",
        "about": "Enim labore voluptate amet ea aute ea dolore minim incididunt incididunt amet ea. Fugiat ut mollit id ea sit dolore in aliqua nisi consectetur occaecat eu ipsum commodo. Incididunt ullamco est aute nostrud ea elit irure. Eiusmod irure est consequat velit et tempor anim pariatur consequat aute tempor esse anim pariatur. Elit eiusmod laboris reprehenderit excepteur eiusmod voluptate qui consequat adipisicing. Consequat enim laboris nostrud adipisicing anim incididunt velit occaecat officia enim reprehenderit nulla consequat. Id laborum ipsum ipsum ea aliqua esse velit sunt pariatur amet qui amet.\r\n",
        "registered": "2020-10-06T11:18:43 +03:00",
        "latitude": 11.948733,
        "longitude": -82.197862,
        "tags": [
            "do",
            "cillum",
            "anim",
            "anim",
            "adipisicing",
            "enim",
            "cupidatat"
        ],
        "friends": [{
                "id": 0,
                "name": "Violet Robinson"
            },
            {
                "id": 1,
                "name": "Alvarez Hays"
            },
            {
                "id": 2,
                "name": "Marquita Hobbs"
            }
        ],
        "greeting": "Hello, Rivers Morton! You have 3 unread messages.",
        "favoriteFruit": "apple"
    }, {
        "_id": "624902b03918171e7bb20826",
        "index": 3,
        "guid": "400cdedf-0f0c-4158-a999-1d6978e5b950",
        "isActive": false,
        "balance": "$2,143.80",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "blue",
        "description": "Berger Nichols",
        "gender": "male",
        "company": "WAZZU",
        "email": "bergernichols@wazzu.com",
        "phone": "+1 (993) 577-2094",
        "address": "678 Montague Street, Collins, New Jersey, 626",
        "about": "Excepteur fugiat in do ut in reprehenderit qui fugiat duis consequat et anim. Ut exercitation laboris reprehenderit deserunt sunt nisi voluptate ea enim. Culpa ipsum consectetur et enim ullamco deserunt ad in fugiat pariatur voluptate fugiat adipisicing.\r\n",
        "registered": "2018-05-02T04:55:01 +03:00",
        "latitude": 44.654,
        "longitude": -17.082441,
        "tags": [
            "minim",
            "non",
            "amet",
            "commodo",
            "deserunt",
            "mollit",
            "mollit"
        ],
        "friends": [{
                "id": 0,
                "name": "Herrera Mcclure"
            },
            {
                "id": 1,
                "name": "Deanne Hubbard"
            },
            {
                "id": 2,
                "name": "Dawn Knight"
            }
        ],
        "greeting": "Hello, Berger Nichols! You have 3 unread messages.",
        "favoriteFruit": "banana"
    }, {
        "_id": "624902b07f194bb5d55f499e",
        "index": 4,
        "guid": "97675b6c-77a4-4c4a-9324-72d98d395975",
        "isActive": true,
        "balance": "$3,963.57",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "description": "Nguyen Mccoy",
        "gender": "male",
        "company": "EGYPTO",
        "email": "nguyenmccoy@egypto.com",
        "phone": "+1 (872) 447-2869",
        "address": "796 Dorchester Road, Fontanelle, Nevada, 553",
        "about": "Adipisicing sunt eiusmod amet deserunt eiusmod adipisicing est. Incididunt magna incididunt amet elit labore non dolore ex aliquip ex sit nisi. Voluptate dolor cupidatat duis et laboris. Et aute do irure voluptate ad.\r\n",
        "registered": "2016-11-23T09:57:46 +02:00",
        "latitude": 84.890041,
        "longitude": 95.197923,
        "tags": [
            "eu",
            "tempor",
            "laborum",
            "ad",
            "in",
            "mollit",
            "pariatur"
        ],
        "friends": [{
                "id": 0,
                "name": "Donovan Chen"
            },
            {
                "id": 1,
                "name": "Nellie Flowers"
            },
            {
                "id": 2,
                "name": "Elvia Davidson"
            }
        ],
        "greeting": "Hello, Nguyen Mccoy! You have 9 unread messages.",
        "favoriteFruit": "apple"
    }, {
        "_id": "624902b0bece9e6b5b558b60",
        "index": 5,
        "guid": "8c5dae42-def8-4f8d-92e5-3b259da2595c",
        "isActive": true,
        "balance": "$2,185.96",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "brown",
        "description": "Ashlee Dillon",
        "gender": "female",
        "company": "ZILPHUR",
        "email": "ashleedillon@zilphur.com",
        "phone": "+1 (833) 426-2350",
        "address": "364 Porter Avenue, Herald, Tennessee, 9273",
        "about": "Proident voluptate minim non amet non id. Aute proident eu excepteur non velit tempor dolor enim labore sunt ipsum nostrud. Consectetur dolore laborum sit esse labore. Mollit qui ad enim excepteur anim anim eu et cupidatat laborum. Officia laboris mollit velit mollit irure labore velit sunt non aliquip ad ullamco proident eiusmod. Est officia velit aliqua culpa.\r\n",
        "registered": "2019-12-27T01:27:05 +03:00",
        "latitude": 84.549783,
        "longitude": -175.461778,
        "tags": [
            "incididunt",
            "sint",
            "aliqua",
            "nisi",
            "exercitation",
            "proident",
            "elit"
        ],
        "friends": [{
                "id": 0,
                "name": "Ruth Levy"
            },
            {
                "id": 1,
                "name": "Cathy Lynn"
            },
            {
                "id": 2,
                "name": "Fernandez Mcgee"
            }
        ],
        "greeting": "Hello, Ashlee Dillon! You have 3 unread messages.",
        "favoriteFruit": "apple"
    }]
})

app.filter('search', function() {

    return function(data, str) {
        if (!str) {
            return data;
        }

        var filtered = [];

        for (i = 0; i < data.length; i++) {
            if (data[i].description.includes(str)) {
                filtered.push(data[i]);
            }
        }

        return filtered;
    }
});