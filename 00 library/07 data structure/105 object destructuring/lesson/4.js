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
    }
}

japaneseRestaurant.foodDelivery({
    deliveryTime: '12:30',
    address: '18 Markham Woods Rd',
    mainMenuIndex: 1,
    appetizersIndex: 0
});

japaneseRestaurant.foodDelivery({
    address: '18 Markham Woods Rd',
});
