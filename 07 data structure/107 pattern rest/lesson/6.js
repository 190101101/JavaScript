'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    workingHours: {
        wed: { open: 10, close: 23 },
        fri: { open: 10, close: 23 },
        sat: { open: 0, close: 24 },
        sun: { open: 12, close: 0 },
    },
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [
            this.appetizers[appetizersIndex], 
            this.mainMenu[mainMenuIndex]
        ];
    },
    foodDelivery: function({
        mainMenuIndex = 0,
        appetizersIndex = 0,
        address,
        deliveryTime = '18:00'
    }){
        console.log(`
            Your order on the way to you! 
            ${this.appetizers[appetizersIndex]} and 
            ${this.mainMenu[mainMenuIndex]} will be arrived to 
            ${address} ${deliveryTime}.
        `)
    },
    orderSushi: function(ing1, ing2, ing3){
        console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}`)
    },
    orderRamen: function(noodle, ...otherIngs){
        let ings = '';
        for(let i = 0; i < otherIngs.length; i++){
            ings += otherIngs[i] + ', ';
        }
        console.log(`You have ordered ${noodle} with ${ings.slice(0, ings.length -2)}`);
    },
};

japaneseRestaurant.orderRamen('Colored Noodle', 'Meat', 'Chicken', 'Onion');