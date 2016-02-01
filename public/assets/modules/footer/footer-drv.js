angular.module('coreMod')
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: 'footer.html'
		};
	});