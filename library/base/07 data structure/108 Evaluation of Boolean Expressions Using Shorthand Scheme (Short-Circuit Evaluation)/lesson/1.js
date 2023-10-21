'use strict'

//Use any data types, return any data types, short-circuit evaluation
console.log(5 || 'hello');
console.log(5 && 'hello');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || '' || 0 || 'hey' || 23 || null);