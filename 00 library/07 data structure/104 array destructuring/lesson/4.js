'use strict'

let japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex],this.mainMenu[mainMenuIndex]];
    }
}

let [appetizer, mainFood] = japaneseRestaurant.orderFood(2, 1);
console.log(appetizer, mainFood);

// nested arr
let [p1, p2, [p3, p4]] = [1,2, [7, 9]];

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)


// 
let unknownArr = [3,5];
let [z=0,x=0,c=0] = unknownArr;
console.log(z,x,c);