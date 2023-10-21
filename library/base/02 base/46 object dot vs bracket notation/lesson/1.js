user = {
	name: 'cookie',
	age: 7,
	job: 'meow',
	birthYear: 2015,
	familyMembers: ['kikusi', 'kikus'],
	location: 'Baki',
}

console.log(user.name)
console.log(user['name'])

// const baseName = 'name';
const baseName = undefined;

if(user[baseName]){
	console.log(user[baseName]);
}

console.log(user.familyMembers[0]);