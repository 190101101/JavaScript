'use strict'

const japaneseRestaurant = {
    restName: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    workingHours: {
        wed: {
            open: 10,
            close: 23,
        },
        fri: {
            open: 10,
            close: 23,
        },
        sun: {
            open: 12,
            close: 23,
        },
    },
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex],this.mainMenu[mainMenuIndex]];
    },
}

const {workingHours, restName, categories} = japaneseRestaurant;


// nested objects
/*
const { 
    sun: { open: openHourse, close: closeHourse } 
} = workingHours;
console.log(openHourse)
*/

const { 
    sun: { open, close } 
} = workingHours;

console.log(open);
console.log(close);
