angular.module('coreMod')
	.controller('PricingController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'app/modules/pricing/pricing.json';
		$scope.prices = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				console.log("Controller Success: " + $scope.filepath);
				$scope.prices = response.data;
				console.log("Prices: " + $scope.prices);
			},
			function error(response){
				//error callbacks
				console.log("Controller Error: " + $scope.filepath);
				$scope.prices = response.data;
				$scope.errors = response.error;
				console.log(
					"Prices: " + $scope.prices + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
	}])
;