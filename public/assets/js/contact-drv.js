angular.module('coreMod')
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/contact/contact.html',
			controller: 'ClientController'
		};
	})
;