# AngularJS

<div ng-controller="FormController" ng-form name="validationForm">

            $scope.$on("form-valid-status", function (evt, valid) {
                $scope.safeApply(function () {
                    $scope.wizardState.isFormValid = valid;
                });
            });

            //fire off an initial search to populate the list if the domain setting for character minimum is set to 0
            if ($scope.wizardState.PickerCharacterMinimum == 0)
                $scope.wizardActions.start.searchForCompany("");
        }
    ])
    .controller('FormController', ["$rootScope", "$scope", function ($rootScope, $scope) {
        $scope.$watch('validationForm.$valid', function () {
            $rootScope.$broadcast("form-valid-status", $scope.validationForm.$valid);
        });
    }])
