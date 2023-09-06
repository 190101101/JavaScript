'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
    [weekdays[2]]: {
        open: 10,
        close: 23,
    },
    [weekdays[4]]: {
        open: 10,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
    [weekdays[6]]: {
        open: 12,
        close: 23,
    },
};

const japaneseRestaurant = {
    restName: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    workingHours,
    orderFood (appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex],this.mainMenu[mainMenuIndex]];
    },
    foodDelivery ({
        mainMenuIndex = 0,
        appetizersIndex = 0,
        address,
        deliveryTime = '18:00',
    }){
        console.log(mainMenuIndex, appetizersIndex, address, deliveryTime);
    },
    orderSushi (ing1,ing2,ing3){
        console.log(`You have ordered sushi with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderRamen (noodle, ...otherIngs){
        console.log(noodle, otherIngs);
    }
}

const props = Object.keys(workingHours);
console.log(`"Banzai" opens ${props.length} days in a week`);

for(const day of props){
    console.log(day);
}
