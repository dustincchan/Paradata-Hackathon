angular.module('hydraMod', [])
	.directive('hydra', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: '/app/modules/hydra/hydra.html',
			/*
			transclude: true,
			link: function(scope, el, attrs, ctrl, transclude){
				el.find('.transclude').append(transclude());
			}
			*/
		};
	})
;