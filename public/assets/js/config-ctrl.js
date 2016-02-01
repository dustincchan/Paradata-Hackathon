angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.configure = true;
		$scope.edit = false;
		/*
		$scope = {
			configure: true,
			edit: false
		};
		function configToggle($scope){
			$scope.configure = !$scope.configure;
			console.log(
				"configure: " + $scope.configure + "\n",
				"edit: " + $scope.edit + "\n",
				"configToggle: " + configToggle()
			);
			return $scope.configure;
		};
		*/
	});