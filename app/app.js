(function () {
    var app = angular.module('ng-electron', ['ui.router', 'angular-electron', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])

     //Manually bootstrapping the angular app to the body tag.
    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['ng-electron'])
    });

}())