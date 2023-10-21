'use strict'

const color = new Set([
    'red', 'blue', 'black', 'green', 'white', 'black'
]);

console.log(color);

color.add('pink')
color.delete('black')
color.clear()

console.log(color);
console.log(color.size);
