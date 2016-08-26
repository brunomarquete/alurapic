angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {

   return $resource('/v1/fotos/:fotoId', null, {
       'update' : { 
            method: 'PUT'
        }
   });

})
.factory('recursoGrupo', function($resource) {

    return $resource('v1/grupos/:grupoId', null, {
        'update' : {
            method: 'PUT'
        }
    });

})
.factory('cadastroFotos', function(recursoFoto, $q, $rootScope) {

    var service = {};
    var eventoCadastro = 'fotoCadastrada';

    service.cadastrar = function(foto) {

        return $q(function(resolve, reject) {

            if (foto._id) {

                recursoFoto.update({fotoId: foto._id}, foto, function() {

                    $rootScope.$broadcast(eventoCadastro);

                    resolve({
                        mensagem: "Foto " + foto.titulo + "alterada com sucesso.",
                        inclusao: false
                    });

                }, function(erro) {
                    console.log(erro);

                    reject({
                        mensagem: "Ocorreu um erro ao tentar alterar a foto " + foto.titulo + "."
                    })
                });

            } else {

                recursoFoto.save(foto, function() {

                    $rootScope.$broadcast(eventoCadastro);

                    resolve({
                        mensagem: "Foto " + foto.titulo + " incluída com sucesso.",
                        inclusao: true
                    });

                }, function(erro) {
                    console.log(erro);

                    reject({
                        mensagem: "Ocorreu um erro ao tentar incluir a foto " + foto.titulo + "."
                    })
                });


            }

        });
    };

    return service;

});