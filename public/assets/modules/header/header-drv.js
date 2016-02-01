angular.module('coreMod')
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: 'header.html'
		};
	});