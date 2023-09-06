'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
};


// 1
const menu = {...japaneseRestaurant.mainMenu};
console.log(menu);

// 2
const newJapaneseRestaurant = {
    ...japaneseRestaurant, 
    owner: 'apsi'
};
console.log(newJapaneseRestaurant);

// 3
const text = 'JavaScript';
console.log(...text);

// const colors = function(...object){
const colors = function(...object){
    console.log(object)    ;
}

colors(...['color', 'green', 'black']);

// 4
const japaneseRestaurantCopy = {...japaneseRestaurant};
console.log(japaneseRestaurantCopy);
