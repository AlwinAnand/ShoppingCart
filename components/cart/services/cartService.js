(function(){
  'use strict'

  angular.module('shoppingCartApplication.cart').
    factory('cartService', cartService);

  // LoginService.$inject = [''];

  function cartService() {
  
    var cart = function () {
	 $http.get('cart.json').success(function(response){
	   $scope.cartlist = response;
	  });	
	};
}
})();
