angular.module('coreMod')
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/footer/footer.html'
		};
	});