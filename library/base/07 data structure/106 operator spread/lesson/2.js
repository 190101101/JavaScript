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

const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
console.log(newMenu);

//Array copying
const categoriesCopy = [...japaneseRestaurant.categories];
console.log(categoriesCopy);

//Merge array
const mergeMenu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
console.log(mergeMenu);


