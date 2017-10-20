(function () {
  'use strict'

  angular.module('shoppingCartApplication', ['ui.router', 'shoppingCartApplication.header',
  'shoppingCartApplication.home', 'shoppingCartApplication.account','shoppingCartApplication.category','shoppingCartApplication.cart']);
  angular.module('shoppingCartApplication').config(shoppingCartConfiguration);

  shoppingCartConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
  function shoppingCartConfiguration($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.when('', '/index');

    // $stateProvider.state('root', {
    //     url: '/main',
    //     templateUrl: 'components/home/views/main.html',
    //   });

    // $httpProvider.defaults.cache = false;
    $urlRouterProvider.otherwise('/login');
  };

  angular.module('shoppingCartApplication').run(shoppingCartApplicationRun);
  shoppingCartApplicationRun.$inject = ['$state'];
  function shoppingCartApplicationRun($state) {
    $state.go('login');
  };
}());
