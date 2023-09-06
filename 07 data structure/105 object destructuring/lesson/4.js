'use strict';

let x = 3;
let y = 5;

let obj = {x: 11, y:22};
console.log(x, y);
console.log(obj);

({x, y} = obj);
console.log(x, y);