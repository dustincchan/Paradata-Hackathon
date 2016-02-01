angular.module('coreMod')
	.controller('CopyrightController', function($scope){
		this.year = new Date().getFullYear();
	});