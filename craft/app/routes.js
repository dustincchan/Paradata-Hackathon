angular.module('paraData')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/pages/home/home.html',
			})
			.when('/solutions', {
				templateUrl: 'app/pages/solutions/solutions.html',
			})
			.when('/markets', {
				templateUrl: 'app/pages/markets/markets.html',
			})
			.when('/technology', {
				templateUrl: 'app/pages/technology/technology.html',
			})
			.when('/company', {
				templateUrl: 'app/pages/company/company.html',
			})
			.when('/careers', {
				templateUrl: 'app/pages/careers/careers.html',
			})
			.when('/blog', {
				templateUrl: 'app/pages/blog/blog.html',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);