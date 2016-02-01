angular.module('coreMod')
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: 'nav.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});