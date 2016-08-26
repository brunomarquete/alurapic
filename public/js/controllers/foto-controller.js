angular.module('alurapic').controller('FotoController', function ($scope, $routeParams, recursoFoto, cadastroFotos) {

	$scope.foto = {};
	$scope.mensagem = "";

	if ($routeParams.fotoId) {

		recursoFoto.get({ fotoId: $routeParams.fotoId }, function (foto) {
			$scope.foto = foto;
		}, function (erro) {
			$scope.mensagem = "Não foi possível obter a foto.";
			console.log(erro);
		});

		//		 $http.post('/v1/fotos', $scope.foto)
		//            .success(function() {
		//                console.log('Foto adicionada com sucesso');
		//            })
		//           .error(function(erro) {
		//                console.log('Não foi possível cadastrar a foto');
		//        })

	}

	$scope.submeter = function () {

		if ($scope.formulario.$valid) {

			cadastroFotos.cadastrar($scope.foto)
			.then(function (dados) {
				$scope.mensagem = dados.mensagem;

				if (dados.inclusao) {
					$scope.foto = {};
				}

			}).catch(function (dados) {
				$scope.mensagem = dados.mensagem;
			});

			// if ($routeParams.fotoId) {

			// 	recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function () {
			// 		$scope.mensagem = 'Foto alterada com sucesso';
			// 	}, function (erro) {
			// 		$scope.mensagem = "Ocorreu um erro ao tentar alterar a foto.";
			// 		console.log(erro);
			// 	});

			// 	// $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
			// 	// 	.success(function() {
			// 	// 		$scope.mensagem = 'Foto alterada com sucesso';
			// 	// 	}).error(function(erro) {
			// 	// 		$scope.mensagem = "Ocorreu um erro ao tentar alterar a foto.";
			// 	// 		console.log(erro);
			// 	// });


			// } else {

			// 	recursoFoto.save($scope.foto, function () {
			// 		$scope.foto = {};
			// 		$scope.mensagem = "Foto salva com sucesso!";
			// 	}, function (erro) {
			// 		$scope.mensagem = "Ocorreu um erro ao tentar salvar a foto.";
			// 		console.log(erro);
			// 	});

			// 	// $http.post('/v1/fotos', $scope.foto)
			// 	// 	.success(function () {
			// 	// 		$scope.foto = {};
			// 	// 		$scope.mensagem = "Foto salva com sucesso!";
			// 	// 	}).error(function (erro) {
			// 	// 		$scope.mensagem = "Ocorreu um erro ao tentar salvar a foto.";
			// 	// 		console.log(erro);
			// 	// });

			// };



		}

	}

});