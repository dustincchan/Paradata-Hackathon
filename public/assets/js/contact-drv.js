angular.module('coreMod')
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: 'contact.html',
			controller: 'ClientController'
		};
	})
;