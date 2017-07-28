(function () {
    'use strict';

    angular.module('ng-electron').component('landing', {
        templateUrl: './landing/landing.html',
        bindings: {},
        controller: function (shell, currentWebContents) {
            const electron = require('electron')
            const {remote} = electron;
            const main = remote.require('./main.js')
            const NativeImage = electron.nativeImage;
            var vm = this;
            vm.talktoMain = () => {
                main.clickBait();
            }
            vm.shellStuff= () => {
                shell.beep()
            }
            vm.print = () => {
                currentWebContents.print();
            }
            vm.notifyMe = () => {
                
                // Let's check if the browser supports notifications
                if (!("Notification" in window)) {
                    alert("This browser does not support system notifications");
                }

                // Let's check whether notification permissions have already been granted
                else if (Notification.permission === "granted") {
                    // If it's okay let's create a notification
                    var notification = new Notification("Hi there!");
                }

                // Otherwise, we need to ask the user for permission
                else if (Notification.permission !== 'denied') {
                    Notification.requestPermission(function (permission) {
                        // If the user accepts, let's create a notification
                        if (permission === "granted") {
                            var notification = new Notification("Hi there!");
                        }
                    });
                }

                // Finally, if the user has denied notifications and you 
                // want to be respectful there is no need to bother them any more.
            }
        }
    })
}());