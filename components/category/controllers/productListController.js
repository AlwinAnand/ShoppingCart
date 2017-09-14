(function(){
  'use strict'
     angular.module('shoppingCartApplication.category').
      controller('productListController', productListController);

   productListController.$inject = ['$scope', '$state','$http', 'categoryController'];

  function productListController($scope, $state,$http, categoryController) {
    
	$scope.checkProduct = function(){
	var a = $scope.img_url;
}	
};	

}());
