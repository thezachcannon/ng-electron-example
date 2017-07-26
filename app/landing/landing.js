(function () {
    'use strict';

    angular.module('ng-electron').component('landing', {
        templateUrl: './landing/landing.html',
        bindings: {},
        controller: function (shell){
            var vm = this;
            vm.openMySite = () => {
                shell.openExternal('http://www.thezachcannon.com');
            }
        }
    })
}());