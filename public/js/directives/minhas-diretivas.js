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
            restrict: "A",
        };

        ddo.link = function (scope, element) {

            scope.$watch('focado', function () {

                scope.$on('fotoCadastrada', function () {
                    element[0].focus();
                });

            });

        }

        return ddo;

    });