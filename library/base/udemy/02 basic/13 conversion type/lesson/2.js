// Conversion to number

//Number()
let x = Number('5.1234');
x = Number(false);
x = Number(null);
x = Number('zxc');
x = Number([1,2,3]);

console.log(x);
console.log(typeof x);
console.log(x.toPrecision(7));


//parseInt || parseFloat
x = parseInt('123.123');
x = parseFloat('123.123');

console.log(x);
console.log(typeof x);
console.log(x.toPrecision(7));
