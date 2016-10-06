(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var buyController = this;
		buyController.itemsToBuy = ShoppingListCheckOffService.itemsToBuy();

		buyController.buy = function(index){
			ShoppingListCheckOffService.buy(index);
		};

      buyController.isEmpty = function(){
        return buyController.itemsToBuy.length === 0;
      };
	}

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtController = this;
		boughtController.itemsBought = ShoppingListCheckOffService.itemsBought();

		boughtController.isEmpty = function(){
			return boughtController.itemsBought.length === 0;
		};
    }

	function ShoppingListCheckOffService(){
	  var service = this;

	  var buy = [
				{name: "Lettuce", quantity:"1"},
				{name: "Avocado", quantity:"2"},
				{name: "Tomatos", quantity:"5"},
				{name: "Rice Milk", quantity:"3 ltr"},
				{name: "Cookies", quantity:"1 pkt"}
				];
				
	  var bought = [];

	  service.itemsToBuy = function(){
	    return buy;
	  };

	  service.itemsBought = function(){
	    return bought;
	  };

	  service.buy = function(index){
	    var value = buy[index];
	    bought.push(value);
	    buy.splice(index, 1);
	  };
	}

})();
