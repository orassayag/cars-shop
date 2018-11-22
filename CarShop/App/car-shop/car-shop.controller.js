(function () {
    'use strict';

    angular
        .module('mainApp.carShop')
        .controller('CarShopController', ['$scope', 'CarShopService',
            function ($scope, CarShopService) {
                var vm = this;

                vm.cars;

                // Methods

                // Get all cars on load
                vm.getCars = function () {
                    CarShopService.getCars({
                    }).then(function (result) {
                        if (result) {
                           vm.cars = result.data.ResponseData;
                        }
                        else {
                        }
                    },
                    function (reason) {
                        if (reason) {
                        }
                        else {
                        }
                    });
                };

                vm.getCars();

                vm.open = function () {
                    vm.showCarOrderDialog = true;
                };

                vm.modalOneHide = function () {
                    vm.showCarOrderDialog = false;
                };
            }]);
})();