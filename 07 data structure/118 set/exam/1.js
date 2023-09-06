// 1
console.log(new Set());

// 2
console.log(new Set('Hello'));

// 3
console.log(new Set('Hello').size);
console.log(new Set('Hello').add([1,2,3]));
console.log(new Set('Hello').add('value'));

const text = new Set('Hello');
text.delete('l');
console.log(text);

console.log(text.has('o'));
console.log(text.has('r'));
text.clear();
console.log(text);

const colors = new Set(['red', 'yellow', 'black', 'blue']);

for(const color of colors){
	console.log(color);
}

const newColors = [...colors];
console.log(newColors);