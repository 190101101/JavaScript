'use strict'

const weekdays = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
];

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
}

// 1
const [p1, p2, ...p3] = japaneseRestaurant.categories;
console.log(p1, p2, ...p3);

// 2
const [sushi, ramen, ...others] = [
    ...japaneseRestaurant.appetizers,
    ...japaneseRestaurant.mainMenu,
];
console.log(sushi, ramen, others);

// 3 
const [sun, sat, ...weekday] = [...weekdays];
console.log(sun, sat, weekday);

// 4
const sum = function(...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));
