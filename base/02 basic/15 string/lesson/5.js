let p1;
let p2 = 'hello world';

p1 = p2.substring(0, 3);
p1 = p2.slice(-5);
p1 = p2.split(' ');
p1 = 'red, orange, white'.split(',');
p1 = 'red, black'.replace('black', 'white');
p1 = 'red, black'.includes('black');

console.log(p1);