(function(){
  'use strict'

  angular.module('shoppingCartApplication.account').
      controller('loginController', loginController);

  loginController.$inject = ['$scope', '$state', 'loginService','$http'];

  function loginController($scope, $state, loginService,$http) {
    var vm = this;

    vm.loginInfo = {};
    vm.errorInfo = {};

    vm.login = login;
    vm.onChangeUsername = onChangeUsername;
    vm.onChangePassword = onChangePassword;
    vm.clearError = clearError;
	vm.user = getJsonData;
	vm.password = '';
	//var check = getJsonData();
	var check = getJsonData();

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
	 
      if (response && vm.loginInfo.userName === vm.user && vm.loginInfo.passWord === vm.password) {    	    
		window.location.href = '#/main';	          
      }
	  else{
		alert('Invalid Credentials');		
	  }	  
    };

    function onChangeUsername() {
      vm.clearError();
    };

    function onChangePassword() {
      vm.clearError();
    };
    
	function getJsonData(){
	 $http.get('user.json').success(function(response){
	   vm.user = (response.username);	
       vm.password = (response.password);	   				 				 
				 return;
	  });	
	};
	
    function clearError() {
      vm.errorInfo.userRequired = false;
      vm.errorInfo.passwordRequired = false;
      vm.errorInfo.loginFailed = false;
    };

  };

}());
