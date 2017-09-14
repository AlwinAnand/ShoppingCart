(function(){
  'use strict'

  angular.module('shoppingCartApplication.category').
    factory('categoryService', categoryService);

  // LoginService.$inject = [''];

  function categoryService() {
  
    var category = function () {
	 $http.get('category.json').success(function(response){
	   $scope.categorylist = response;	   
	  });	
	};
}
})();
