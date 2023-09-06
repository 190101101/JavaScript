'use strict'

let x = 3;
let y = 5;

const obj = {x: 11, y: 22, z: 33};

console.log(x, y);

({x, y} = obj);

console.log(x, y);