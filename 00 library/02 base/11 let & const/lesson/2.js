const name = 'cookie';
console.log(name);

/*
error: TypeError: Assignment to constant variable
name = 'apsi';
console.log(name);
*/

/*
error: Missing initializer in const declaration
const zxc;
*/

const user = {
	name: 'cookie',
	gender: 'male',
	age: '6',
}

console.log(user)

console.log(user.name = 'cookies');
console.log(user)


/*
error: TypeError: Assignment to constant variable
user = {
	name: 'apsi'
}
*/

const colors = ['red', 'green', 'orange', 'blue'];
console.log(colors)

colors.push('yellow');
console.log(colors)

/*
error: TypeError: Assignment to constant variable
colors = ['black', 'white'];
console.log(colors)
*/
