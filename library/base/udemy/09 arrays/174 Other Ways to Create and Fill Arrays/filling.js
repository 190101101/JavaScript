console.log([1, 2, 3]);
console.log(new Array(3));

// empty arrays
const arr = new Array(3);
console.log(arr);
// console.log(arr.map(() => 7));

// method fill
arr.fill(7, 1, 3);
console.log(arr);

const arr1 = [1, 1, 1, 1, 1];
arr1.fill(3, 2, 4);

console.log(arr1);

// Array.from();

const arr3 = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
console.log(arr3);



console.log(
    Array.from({length: 5}, (item, index) => index + 1)
)