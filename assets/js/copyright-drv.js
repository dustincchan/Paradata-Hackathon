angular.module('coreMod')
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: 'copyright.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});