const elems = (...elem) => arr.push(...elem);

arr = [1,2,3];

const data = elems.bind(arr);
data(4, 5)
data(6)
console.log(arr);
