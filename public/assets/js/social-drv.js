angular.module('coreMod')
	.directive('social', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/social/social.html',
			controller: 'ClientController'
		};
	})
;