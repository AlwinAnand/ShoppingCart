(function() {
    'use strict'

    var app = angular.module('shoppingCartApplication.home');

    app.directive('inventoryProduct', function() {

        var template = '<div class="grid_1_of_4 images_1_of_4">' +
            '<a href="preview.html"><img src={{image}} alt="" /></a>' +
            '<h2>Lorem Ipsum is simply </h2>' +
            '<div class="price-details">' +
            '<div class="price-number">' +
            ' <p><span class="rupees">{{price}}</span></p>' +
            '</div>' +
            '<div class="add-cart">' +
            '<h4><a href="preview.html">Add to Cart</a></h4>' +
            '</div>' +
            '<div class="clear"></div>' +
            ' </div>' +
            '</div>';

        return {
            restrict: 'E',
            scope: {
                image: '@',
                price: '@'
            },
            template: template,
        };
    });
}());