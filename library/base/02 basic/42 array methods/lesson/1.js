const numbers = [23, 54, 4, 31, 11];
let result;

result = numbers.length;
result = Array.isArray(numbers);
result = numbers.indexOf(4);
result = numbers.push(7);
result = numbers.pop();
result = numbers.unshift(99);
result = numbers.shift();
result = numbers.push(7, 13, 12);
result = numbers.splice(1, 4);
result = numbers.reverse();
result = numbers.slice(1, 3);
result = numbers.concat(numbers);

console.log(result);
