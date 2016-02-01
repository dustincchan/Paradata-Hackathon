angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var pageData = 'app/contents/'+chimera+'.json';
		$scope.template = 'app/pages/'+chimera+'/'+chimera+'.html';
		$scope.contents = [];
		$scope.errors = [];
		$scope.configure = true;
		$scope.configtype = function($scope){
			console.log("* Config Panel *");
			if ($scope.contents.config.type == "h1" || "h2" || "h3" || "h4" || "h5" || "h6"){
				console.log("Config Headline");
				return "configheadline";
			} else if ($scope.contents.config.type == "p"){
				console.log("Config Text");
				return "configtext";
			} else if ($scope.contents.config.type == "img"){
				console.log("Config Image");
				return "configimg";
			} else {
				console.log("Null Config");
				return null;
			};
		};
		/*
		$http.post(pageData).then(
			function success(response){
				$scope.contents = response.data;
			},
			function error(response){
				$scope.contents = response.data;	
				$scope.errors = response.error;
			}
		);
		*/
		$http.get(pageData).then(
			function success(response){
				//success callbacks
				$scope.contents = response.data;
				console.log(
					"Chimera: " + chimera + "\n",
					"Page URL: " + pageData + "\n",
					"Template URL: " + $scope.template + "\n",
					"Content Level 1: " + $scope.contents
				);
				for(var i = 0; i < $scope.contents.length; i++){
					console.log(
						"Name: " + $scope.contents[i].config.title + "\n",
						"Type: " + $scope.contents[i].config.type + "\n",
						$scope.contents[i].config.type + " " + (i + 1) + " of " + $scope.contents.length + "\n",
						"Content Level 2: " + $scope.contents[i].contents + "\n",
						"-> contains " + $scope.contents[i].contents.length + " widgets."
					);
					for(var j = 0; j < $scope.contents[i].contents.length; j++){
						console.log(
							"Name: " + $scope.contents[i].contents[j].config.title + "\n",
							"Type: " + $scope.contents[i].contents[j].config.type + "\n",
							$scope.contents[i].contents[j].config.type + " " + (j + 1) + " of " + $scope.contents[i].contents.length + "\n",
							"Content Level 3: " + $scope.contents[i].contents[j].contents + "\n",
							"-> contains " + $scope.contents[i].contents[j].contents.length + " components."
						);
					};
				};
			},
			function error(response){
				//error callbacks
				$scope.contents = response.data;
				$scope.errors = response.error;
				console.log(
					"Chimera: " + chimera + "\n",
					"Page URL: " + pageData + "\n",
					"Template URL: " + $scope.template + "\n",
					"Contents: " + $scope.contents[0].contents + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
	}])
;