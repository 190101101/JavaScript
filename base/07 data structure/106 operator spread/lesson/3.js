'use strict';

// console.log(`${...greetingLetters}`); error

const greeting = 'hey';
const greetingLetters = [...greeting, '!'];
console.log(greetingLetters);
console.log(...greetingLetters)

