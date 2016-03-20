(function() {
    'use strict';
    angular.module('routeFightApp')
        .controller('HomeCtrl', HomeCtrl)

            function HomeCtrl() {
                var vm = this;
                vm.Titulo = 'holis';
            }
})();