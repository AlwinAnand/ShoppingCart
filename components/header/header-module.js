(function () {
  'use strict'

  angular.module('shoppingCartApplication.header', []);
  angular.module('shoppingCartApplication.header').config(shoppingCartHeaderConfiguration);
  shoppingCartHeaderConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function shoppingCartHeaderConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'components/header/views/home.html',
      controller: 'homeController',
    }).state('about', {
      url: '/about',
      templateUrl: 'components/header/views/about.html',
      controller: 'aboutController',
    }).state('delivery', {
      url: '/delivery',
      templateUrl: 'components/header/views/delivery.html',
      controller: 'deliveryController',
    }).state('contact', {
      url: '/contact',
      templateUrl: 'components/header/views/contact.html',
      controller: 'contactController',
    }).state('news', {
      url: '/news',
      templateUrl: 'components/header/views/news.html',
      controller: 'newsController',
    });
  }

}());
