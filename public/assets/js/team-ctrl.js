angular.module('coreMod')
	.controller('TeamController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'app/modules/team/team.json';
		$scope.team = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				console.log("Controller Success: " + $scope.filepath);
				$scope.team = response.data;
			},
			function error(response){
				//error callbacks
				console.log("Controller Error: " + $scope.filepath);
				$scope.team = response.data;
				$scope.errors = response.error;
				console.log(
					"Team: " + $scope.team + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
	}])
;