angular.module('slidesMod', ['ngAnimate', 'ngTouch'])
	.directive('slides', function($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {slideshow: '='},
			templateUrl: '/app/modules/slides/slides.html',
			controller: 'SlidesController'
			/*
			link: 'fetchContents'
			*/
		};
	})
;