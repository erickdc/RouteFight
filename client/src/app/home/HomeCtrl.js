(function() {
    'use strict';
    angular.module('routeFightApp')
        .controller('HomeCtrl', HomeController);

            function HomeController() {
                var vm = this;
                vm.Titulo = 'holis';
            }
})();