angular.module('coreMod')
	.controller('SitemapController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'assets/js/sitemap.json';
		$scope.sitemap = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				$scope.sitemap = response.data;
				console.log("Sitemap: " + $scope.sitemap);
			},
			function error(response){
				//error callbacks
				$scope.sitemap = response.data;
				$scope.errors = response.error;
				console.log(
					"Sitemap: " + $scope.sitemap + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
	}])
;