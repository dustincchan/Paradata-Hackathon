angular.module('coreMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: 'social.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});