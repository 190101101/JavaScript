'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [
            this.appetizers[appetizersIndex], 
            this.mainMenu[mainMenuIndex]
        ];
    }
};

// console.log(japaneseRestaurant.orderFood(2, 1));
//Returning values from function
const [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
console.log(appetizer, mainFood)