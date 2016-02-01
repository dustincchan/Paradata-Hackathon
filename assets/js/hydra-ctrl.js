angular.module('hydraMod')
	.controller('HydraController', function($scope){
		$scope.edit = false;
		/*
		$scope.saveChanges = function(){
			var data = $.param({
				json: JSON.stringify({
					name: $scope.newName
				})
			});
			$http.post("/echo/json/", data).success(function(data, status) {
				$scope.hello = data;
			})
		};
		*/
	})
;