angular.module('coreMod')
	.directive('salesforce', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/salesforce/salesforce.html'
		};
	})
;