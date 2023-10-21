'use strict';

//Old bad approach
const arr = [4,5,6];
const newArr = [1,2,3, arr[0], arr[1], arr[2]];
console.log(newArr)

//new approach with spread operator
const newArrSpread = [1,2,3, ...arr];
console.log(newArrSpread)
console.log(...newArrSpread)

