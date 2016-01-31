angular.module('coreMod')
	.controller('SalesforceController', function($scope){
		$scope.popover = function(){
			$('div.salesforce-form').toggleClass('visible-block');
		};
	})
;