const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';
const textWithSpace = ' Some Text   ';

// 1
console.log(airline.toLowerCase());

// 2
console.log(airline.toUpperCase());

// 3
console.log(textWithSpace.trim());

// 4
const person = ' lInDa jHOnSoN ';
const capitalizeName = person.toLowerCase().trim();
const [firstNameLower, lastNameLower] = capitalizeName.split(' ');
const personName = [
	firstNameLower.replace(firstNameLower[0], firstNameLower[0].toUpperCase()),
	lastNameLower.replace(lastNameLower[0], lastNameLower[0].toUpperCase())
].join(' ');

console.log(personName);

// 5
const lorem = 'Lorem ipsum, dolor sit amet, dolor consectetur adipisicing';
const text1 = lorem.replaceAll('dolor', 'lefemu');
const text2 = lorem.replace(/dolor/g, 'lefemu');
console.log(text1);
console.log(text2);

// 6
console.log(lorem.includes('dolor'));

// 7
console.log(lorem.startsWith('Lorem'));
console.log(lorem.endsWith('adipisicing'));

// 8
const terminal = function(text){
	const newText = text.toLowerCase();
	if(newText.includes('knife') || newText.includes('gun')){
		console.log('oops');
	}else{
		console.log('welcome');
	}
}

terminal('Lorem knife, dolor');
terminal('dolor gun');
terminal('dolor sit amet');