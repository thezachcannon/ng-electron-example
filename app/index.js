(function () {
    'use strict';
    angular.module('ng-electron').controller('indexCtrl', function ($scope) {
        $scope.electronV = process.versions['electron'];
        $scope.platform = process.platform;
        var packageJSON = (require('../package.json'))
        $scope.package = packageJSON;
    })
}())