'use strict';

//Nested destucturing
const nestedArr = [1, 2, [7, 9]]
console.log(nestedArr[0], nestedArr[1], nestedArr[2][0], nestedArr[2][1])

const [p1, p2, [p3, p4] ] = nestedArr
console.log(p1, p2, p3, p4)
