(function () {
    'use strict';

    angular.module('ng-electron').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/landing')
        $stateProvider
            .state('landing', {
                url: '/landing',
                component: 'landing'
            })
    })
}())