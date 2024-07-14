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
    }
}

//Iterable - arrays, string, maps, sets, Objects Arent iterable.

//Spread operator with strings
const greeting = 'Hey';
const greetingLetter = [...greeting, '!'];
console.log(greetingLetter);
// console.log(`${...greeting}`) cant do this!!!