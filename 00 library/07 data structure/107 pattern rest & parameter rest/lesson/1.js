'use strict'

// this is spread operator, beacause are on the right side of =
const arr = [1,2,3,4, ...[3,4]];
console.log(arr);

// this is rest operator, beacause are on the left side of =
const [p1, p2, ...p3] = [1,2,3,4];
console.log(p1, p2, p3);
