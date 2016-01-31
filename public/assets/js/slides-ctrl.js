angular.module('slidesMod')
	.controller('SlidesController', ['$scope', '$http', function($scope, $http){
		/* Original line removed for testing
		$scope.slideshow = $attrs.slideshow;
		$scope.filepath = 'app/modules/slides/slides-' + $scope.slideshow + '.json';
		*/
		$scope.filepath = 'app/modules/slides/healthscore.json';
		$scope.currentIndex = 0;
		$scope.slides = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				console.log("Controller Success: " + $scope.filepath);
				$scope.slides = response.data;
				console.log("Slides: " + $scope.slides);
				for(var i = 0; i < $scope.slides.length; i++){
					$scope.slides[i].index = i;
					console.log($scope.slides[i].index);
				};
				$scope.$watch('currentIndex', function(){
					$scope.slides.forEach(function(slide) {
						slide.visible = false;
					});
					$scope.slides[$scope.currentIndex].visible = true;
					console.log($scope.slides[$scope.currentIndex].visible);
				});
			},
			function error(response){
				//error callbacks
				console.log("Controller Error: " + $scope.filepath);
				$scope.slides = response.data;
				$scope.errors = response.error;
				console.log(
					"Slides: " + $scope.slides + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
		$scope.selectIndex = function(index){
			$scope.currentIndex = index;
		};
		$scope.isCurrentSlideIndex = function(index) {
			return $scope.currentIndex === index;
		};
		$scope.next = function(){
			$scope.currentIndex < $scope.slides.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
		};
		$scope.prev = function(){
			$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.slides.length - 1;
		};
	}])
;