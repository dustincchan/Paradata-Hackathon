angular.module('coreMod')
	.directive('team', function(){
		return {
			restrict: 'E',
			templateUrl: '/app/modules/team/team.html',
			controller: 'TeamController',
			controllerAs: 'team',
		};
	});