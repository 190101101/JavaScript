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
        sat: {
            open: 0,
            close: 24,
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
    },
    orderRamen: function(noodle, ...otherIngs){
        console.log(noodle, otherIngs);
    }
}

const menu = [
    ...japaneseRestaurant.appetizers, 
    ...japaneseRestaurant.mainMenu
];
console.log(menu);

for (const food of menu){
    console.log(food);
}

for (const food of menu.entries()){
    console.log(food);
}

console.log(menu.entries());
console.log(...menu.entries());


for (const [index, food] of menu.entries()){
    console.log(index + ':' +food);
}
