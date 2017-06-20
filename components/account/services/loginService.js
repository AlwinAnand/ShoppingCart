(function(){
  'use strict'

  angular.module('shoppingCartApplication.account').
    factory('loginService', LoginService);

  // LoginService.$inject = [''];

  function LoginService() {

    var response = {};

    var login = function (username, password) {
      var isAuthenticated = false;

      if (username === 'admin' && password === 'pass') {
        isAuthenticated = true;
      }
      return response;
      //return isAuthenticated;
    };

    return { login: login };
  };

}());
