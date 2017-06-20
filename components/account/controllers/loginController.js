(function(){
  'use strict'

  angular.module('shoppingCartApplication.account').
      controller('loginController', loginController);

  loginController.$inject = ['$scope', '$state', 'loginService'];

  function loginController($scope, $state, loginService) {
    var vm = this;

    vm.loginInfo = {};
    vm.errorInfo = {};

    vm.login = login;
    vm.onChangeUsername = onChangeUsername;
    vm.onChangePassword = onChangePassword;
    vm.clearError = clearError;

    function login() {
      if (!vm.loginInfo.userName || !vm.loginInfo.passWord) {
        if (!vm.loginInfo.userName)
        {
          vm.errorInfo.usernameRequired = true;
        }

        if (!vm.loginInfo.passWord)
        {
          vm.errorInfo.passwordRequired = true;
        }

        return;
      }

      var response = loginService.login($scope.username, $scope.password);
      if (response) {
        alert('success');
      }
    };

    function onChangeUsername() {
      vm.clearError();
    };

    function onChangePassword() {
      vm.clearError();
    };

    function clearError() {
      vm.errorInfo.userRequired = false;
      vm.errorInfo.passwordRequired = false;
      vm.errorInfo.loginFailed = false;
    };

  };

}());
