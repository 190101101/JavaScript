// Conversion to string

//String()
let x = String(1112);
x = String(2 + 2);
x = String(true);
x = String(new Date());
x = String(['one', 'two', 'three']);

console.log(x);
console.log(typeof x);
console.log(x.length);

//toString()
x = (35).toString();
x = (true).toString();

console.log(x);
console.log(typeof x);
console.log(x.length);
