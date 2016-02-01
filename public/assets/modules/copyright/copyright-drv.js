angular.module('coreMod')
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/web/app/modules/copyright/copyright.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});