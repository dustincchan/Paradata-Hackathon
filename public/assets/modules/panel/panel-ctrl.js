angular.module('panelMod', [])
	.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		this.nextTab = function(checkTab){
			return this.tab === checkTab++;
		};
	});