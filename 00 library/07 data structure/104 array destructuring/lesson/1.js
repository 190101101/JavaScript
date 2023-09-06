'use strict'

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
}

const arr = [3, 5, 7];

/*old*/
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];

/*new*/
const [p1, p2, p3] = arr;

console.log(p1)
console.log(p2)
console.log(p3)