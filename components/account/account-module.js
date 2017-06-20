(function () {
  'use strict'

  angular.module('shoppingCartApplication.account', ['ui.router']);
  angular.module('shoppingCartApplication.account').config(shoppingCartAccountConfiguration);
  shoppingCartAccountConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function shoppingCartAccountConfiguration($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/login',
      views: {
        MainView: {
          templateUrl: 'components/account/views/login.html',
          controller: 'loginController',
          controllerAs: 'loginControllerVm'
        }
      }

      //controller: 'homeController',
    });
  }

})();
