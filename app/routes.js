(function () {
    'use strict';

    angular.module('ng-electron').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/landing')
        $stateProvider
            .state('landing', {
                url: '/landing',
                component: 'landing'
            })
            .state('otherRoute', {
                url: '/otherRoute',
                template: '<h1>{{title}}<h1>',
                controller: function ($scope) {
                    $scope.title = 'New Route'
                }
            })
    })
}())