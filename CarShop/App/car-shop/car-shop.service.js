(function () {
    'use strict'

    angular
        .module('mainApp.carShop')
        .service('CarShopService', ['$http', '$q', '$window', '$rootScope',
            function ($http, $q, $window, $rootScope) {
                var vm = this;

                // Get all cars
                this.getCars = function () {
                    return $http.get('http://localhost:12172/api/CarShop/GetCars', {
                    }).then(function (result) {
                        return $q.resolve(result);
                    },
                    function (result) {
                        return $q.reject(result);
                    });
                };
            }]);
})();