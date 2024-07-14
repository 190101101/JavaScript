'use strict'

const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

console.log(airplane.slice(2));
console.log(airplane.slice(0, 6));

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airplane.slice(airplane.lastIndexOf(' ')));
console.log(airplane.slice(-2));

console.log(airline.slice(2, -2));