angular.module('alurapic').controller('GruposController', function($scope, recursoGrupo) {

    $scope.grupos = []; 

    recursoGrupo.query(function(grupos) {
        $scope.grupos = grupos;
    }, function(erro) {
        console.log("Ocorreu um erro ao tentar buscar os grupos.");
    });

    // $http.get('v1/grupos')
    // .success(function(fotos) {

    //     $scope.grupos = fotos;

    // }).error(function(erro){
    //     console.log("Ocorreu um erro ao tentar buscar os grupos.");
    // });
    

});