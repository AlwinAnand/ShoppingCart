(function(){
  'use strict'
     angular.module('shoppingCartApplication.category').
      controller('categoryController', categoryController);

   categoryController.$inject = ['$scope', '$state','$http'];

   
  function categoryController($scope, $state,$http) {
    var vm = this;
	$scope.name="cicil";
    vm.init = function() {
		console.log('Category ctrl');
		$state.go('main.category');
	}
    vm.loginInfo = {};
    vm.errorInfo = {};
   	
	var check = getJsonCategoryData(); 
	
    $scope.showProducts = function(categoryName){	
	//var categoryNM = 'MobilePhones';
	//$scope.img_url = "assets/images/" + categoryNM + ".jpg";
	//$scope.img_url = 'MobilePhones.jpg';	
	   switch(categoryName){
		   case "Mobile Phones" :
		   $state.go('main.mobile');
		   break;
		   case "Desktop" :
		   $state.go('main.desktop');
		   break;
		   case "Laptop" :
		   $state.go('main.laptop');
		   break;
		   case "Tv&Audio" :
		   $state.go('main.tv');
		   break;
		   case "Sports&Fitness" :
		   $state.go('main.sports');
		   break;
		   case "Footwear" :
		   $state.go('main.footwear');
		   break;
		   case "Jewellery" :
		   $state.go('main.jewellery');
		   break;
		   case "Home Decor &amp; Kitchen" :
		   $state.go('main.homedecor');
		   break;
		   case "Beauty &amp; Healthcare" :
		   $state.go('main.beauty');
		   break;
		   case "Toys&Games" :
		   $state.go('main.toys');
		   break;
		   case "Fashions" :
		   $state.go('main.fashion');
		   break;
		   
	  }
};	
	function getJsonCategoryData(){
	 $http.get('category.json').success(function(response){
	  $scope.categorylist = response;	   
				 return;
	  });	
	}; 
vm.init();


  };

}());
