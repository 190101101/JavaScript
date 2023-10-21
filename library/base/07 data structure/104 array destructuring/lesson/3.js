'use strict'

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
}

let [main, ,secondary] = japaneseRestaurant.categories;

console.log(main);
console.log(secondary);

// old
const temp = main;
main = secondary;
secondary = main;


// new
[secondary, main] = [main, secondary];


console.log(main);
console.log(secondary);
