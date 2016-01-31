angular.module('coreMod')
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/copyright/copyright.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});