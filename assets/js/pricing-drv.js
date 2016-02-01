angular.module('coreMod')
	.directive('pricing', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/app/modules/pricing/pricing.html',
			controller: 'PricingController'
		};
	})
;