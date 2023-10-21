// 1
const data = new Map();
console.log(data);

// 2
data.set('login', 'syphilis');
console.log(data);

// 3
data
	.set('prof', 'Spell Singer')
	.set('race', 'Elf')
	.set('level', 80)
	.set('speed', 210)

// 4
data.set('skills', ['f1','f2','f3','f4']);
console.log(data);

// 5
console.log(data.get('login'));

// 6
console.log(data.has('login'));

// 7
data.delete('speed');
console.log(data);

// 8
console.log(data.size);

// 9
data.clear();
console.log(data);

// 10
const arr = [1,2,3];
data.set(arr, 'hello');

console.log(data.get(arr));
console.log(data);
