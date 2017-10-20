(function () {
  'use strict'

  angular.module('shoppingCartApplication.cart', []);
  angular.module('shoppingCartApplication.cart').config(shoppingCartItemsConfiguration);
  shoppingCartItemsConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function shoppingCartItemsConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main.cart', {
      url: '/cart',
	  templateUrl: '/components/cart/views/cart.html',
	  controller: 'cartController'     	  
    });
  } 
})();
