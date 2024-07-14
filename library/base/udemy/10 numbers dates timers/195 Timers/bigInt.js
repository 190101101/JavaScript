console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(11262343425262323423423422423423);
console.log(11262343425262323423423422423423n);
console.log(BigInt(11262343425262323423423422423423));
console.log(BigInt("11262343425262323423423422423423"));

console.log(
  11262343425262323423423422423423n + 11262343425262323423423422423423n
);

const bigNumber = 65435132165465616546546n;
const regularNumber = 150;

// mix BigInt and other types, use explicit conversions
console.log(bigNumber * BigInt(regularNumber));

console.log(321n > 321); // false
console.log(321n > 321n); // false

console.log(typeof 321);
console.log(typeof 321n);
console.log(bigNumber + " big number");

console.log(Math.pow(10, 2));

// Cannot convert a BigInt value to a number
//* console.log(Math.pow(bigNumber, 2))

console.log(5 / 2);
console.log(5n / 2n);
