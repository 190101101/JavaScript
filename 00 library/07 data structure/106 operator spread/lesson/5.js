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
    foodDelivery: function({
        mainMenuIndex = 0,
        appetizersIndex = 0,
        address,
        deliveryTime = '18:00',
    }){
        console.log(mainMenuIndex, appetizersIndex, address, deliveryTime);
    },
    orderSushi: function(ing1,ing2,ing3){
        console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}`);
    }
}

//Objects ES.9
const newJapaneseRestaurant = {...japaneseRestaurant, owner: 'Suzuki'};
console.log(newJapaneseRestaurant);

newJapaneseRestaurant.restName = 'Suzuki Sushi';

console.log(japaneseRestaurant.restName);
console.log(newJapaneseRestaurant.restName);