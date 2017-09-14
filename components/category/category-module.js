(function () {
  'use strict'

  angular.module('shoppingCartApplication.category', []);
  angular.module('shoppingCartApplication.category').config(shoppingCartCategoryConfiguration);
  shoppingCartCategoryConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function shoppingCartCategoryConfiguration($stateProvider, $urlRouterProvider) {
      $stateProvider.state('main.category', {
      url: '/category',
	  templateUrl: '/components/category/views/common.html',
	  controller: 'categoryController'     	  
    }).state('main.mobile', {
      url: '/mobile',
	  controller: function() {
		console.log('mobile ctrl');
	  },
	  templateUrl: '/components/category/views/mobile.html'  
    }).state('main.desktop', {
      url: '/desktop',
	  templateUrl: '/components/category/views/desktop.html' 	  
	  }).state('main.laptop', {
      url: '/laptop',
	  templateUrl: '/components/category/views/laptop.html' 	  
	  }).state('main.tv', {
      url: '/tv',
	  templateUrl: '/components/category/views/tv.html' 
	  }).state('main.sports', {
      url: '/sports',
	  templateUrl: '/components/category/views/sports.html' 
	  }).state('main.footwear', {
      url: '/footwear',
	  templateUrl: '/components/category/views/footwear.html' 
	  }).state('main.jewellery', {
      url: '/jewellery',
	  templateUrl: '/components/category/views/jewellery.html' 
	  }).state('main.homedecor', {
      url: '/homedecor',
	  templateUrl: '/components/category/views/homedecor.html' 
	  }).state('main.beauty', {
      url: '/beauty',
	  templateUrl: '/components/category/views/beauty.html' 
	  }).state('main.toys', {
      url: '/toys',
	  templateUrl: '/components/category/views/toys.html' 
	  }).state('main.fashion', {
      url: '/fashion',
	  templateUrl: '/components/category/views/fashion.html'
	  });
  } 
})();
