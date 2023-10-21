'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    workingHours: {
        wed: {
            open: 10,
            close: 23
        },
        fri: {
            open: 10,
            close: 23
        },
        sun: {
            open: 12,
            close: 0
        },
    },
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [
            this.appetizers[appetizersIndex], 
            this.mainMenu[mainMenuIndex]
        ];
    },
    foodDelivery: function({mainMenuIndex, appetizersIndex, address, deliveryTime}){
        console.log(`
            Your order on the way to you! 
            ${this.appetizers[appetizersIndex]} and 
            ${this.mainMenu[mainMenuIndex]} will be arrived to 
            ${address} ${deliveryTime}.
        `)
    }
};


const {workingHours: hours, name:restName, categories} = japaneseRestaurant


japaneseRestaurant.foodDelivery({
    deliveryTime: '12:30',
    address: '18 Markham woods rd',
    mainmenuIndex: 1,
    appetizersIndex:0
});