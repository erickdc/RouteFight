(function() {
    'use strict';
    angular.module('routeFightApp')
        .controller('HomeCtrl', [UserCtrl])

            function HomeCtrl() {
                var vm = this;
                vm.Titulo = 'holis';
            }
})();