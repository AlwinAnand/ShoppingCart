(function () {
  'use strict'

  angular.module('shoppingCartApplication.home', []);
  angular.module('shoppingCartApplication.home').config(shoppingCartHomeConfiguration);
  shoppingCartHomeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function shoppingCartHomeConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
      url: '/main',
      views: {
        MainView: {
          templateUrl: '/components/home/views/main.html',
        }
      }

      //controller: 'homeController',
    });
  }

})();
