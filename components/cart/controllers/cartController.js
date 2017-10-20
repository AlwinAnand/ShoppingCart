(function(){
  'use strict'
     angular.module('shoppingCartApplication.cart').
      controller('cartController', cartController);

   cartController.$inject = ['$scope', '$state', '$http', '$window', '$rootScope'];

   
  function cartController($scope, $state, $http, $window, $rootScope) {
	  
	$scope.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    	
	$scope.addToCart = function(productId){
		$rootScope.new_product_added = true;
		$window.scrollTo(0, 0);
	};

	$scope.viewCart = function(){
		$rootScope.new_product_added = false;
		$state.go('main.cart');
		$window.scrollTo(0, 0);
	};

	$scope.deleteProduct = function(deleteProductId) {
		$scope.calculateItems(0, 0, deleteProductId);
	};	
	
	$scope.calculateTotal = function(productId, selectedQuantity) {
		$scope.calculateItems(productId, selectedQuantity, 0);
	};
	
	$scope.calculateItems = function(productId, selectedQuantity, deleteProductId) {
		$http.get('cart.json').success(function(response){			
			$scope.cartSubTotal = 0;
			$scope.cartItems = 0;
			$scope.cartlist = [];
			angular.forEach(response, function(item, index){
				if (item.product_id !== deleteProductId) {
					if (item.product_id === productId) {
						item.quantity = selectedQuantity;
					}
					$scope.cartSubTotal += (item.price * item.quantity);
					$scope.cartItems += item.quantity;
					$scope.cartlist.push(item);
				}
			});
			return;
		});
	};		
	$scope.calculateItems(0, 0);
  };

}());
