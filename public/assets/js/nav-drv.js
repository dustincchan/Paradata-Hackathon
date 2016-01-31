angular.module('coreMod')
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/nav/nav.html',
			controller: 'SitemapController'
		};
	});