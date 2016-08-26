angular.module("minhasDiretivas", [])
    .directive("meuPainel", function () {

        var ddo = {
            restrict: "AE",
            scope: {
                titulo: "@"
            },
            transclude: true,
            templateUrl: "js/directives/meu-painel.html"
        };

        return ddo;

    })
    .directive("minhaFoto", function () {

        var ddo = {
            restrict: "AE",
            scope: {
                titulo: "@",
                url: "@"
            },
            templateUrl: "js/directives/minha-foto.html"
        };

        return ddo;

    })
    .directive("botaoPerigo", function () {

        var ddo = {
            restrict: "E",
            scope: {
                nome: "@",
                acao: "&"
            },
            templateUrl: "js/directives/botao-perigo.html"
        }

        return ddo;

    }).directive("foco", function () {

        var ddo = {
            restrict: "A"
        };

        ddo.link = function (scope, element) {

            scope.$watch('focado', function () {

                scope.$on('fotoCadastrada', function () {
                    element[0].focus();
                });

            });

        }

        return ddo;

    }).directive("meusTitulos", function () {

        var ddo = {
            resctrict: "E",
            template: '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>'
        }

        ddo.controller = function ($scope, recursoFoto) {
         
            recursoFoto.query(function (fotos) {
                $scope.titulos = fotos.map(function (foto) {
                    return foto.titulo;
                });
            });

        };

        return ddo;

    });