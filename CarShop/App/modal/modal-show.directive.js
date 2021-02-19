(function () {
    'use strict';

    angular
        .module('mainApp.carShop')
        .directive('modalShow', function () {
            return {
                restrict: 'E',
                replace: true,
                controllerAs: 'vm',
                templateUrl: 'App/modal/modal-show.directive.html',
                scope: {
                    visible: '=',
                    onSown: '&',
                    onHide: '&'
                },

                controller: ['$scope', '$http',
                function ($scope, $http) {
                    var vm = this;
                    
                    vm.email = null;

                    vm.order = function () {
                        alert(vm.email);
                    };
                }],

                link: function postLink(scope, element, attrs) {

                    $(element).modal({
                        show: false,
                        keyboard: attrs.keyboard,
                        backdrop: attrs.backdrop
                    });

                    scope.$watch(function () { return scope.visible; }, function (value) {
                        if (value == true) {
                            $(element).modal('show');
                        } else {
                            $(element).modal('hide');
                        }
                    });

                    $(element).on('shown.bs.modal', function () {
                        scope.$apply(function () {
                            scope.$parent[attrs.visible] = true;
                        });
                    });

                    $(element).on('shown.bs.modal', function () {
                        scope.$apply(function () {
                            scope.onSown({});
                        });
                    });

                    $(element).on('hidden.bs.modal', function () {
                        scope.$apply(function () {
                            scope.$parent[attrs.visible] = false;
                        });
                    });

                    $(element).on('hidden.bs.modal', function () {
                        scope.$apply(function () {
                            scope.onHide({});
                        });
                    });
                }
            };
        }
    );

})();