'use strict';

const arr = [1, 2, ...[3, 4]];

const [p1, p2, ...p3] = [1,2,3,4,5];
console.log(p1, p2, p3);