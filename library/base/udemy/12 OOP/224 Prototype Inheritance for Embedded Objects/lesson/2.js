const numbers = [1,2,3,4,2,3,5];
console.log(numbers.__proto__);
console.log(numbers.__proto__ === Array.prototype);
console.log(numbers.__proto__.__proto__);

Array.prototype.uniqueElements = function(){
	return [...new Set(this)];
}

console.log(numbers.uniqueElements());
console.log(Object.getPrototypeOf(numbers));

console.log((p1) => p1 * 2);