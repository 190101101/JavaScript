const removeSpaces = function(text){
	return text.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(text){
	const [first, ...others] = text.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const converterText = function(str, func){
	console.log(`The original text: ${str}`);
	console.log(`The converted text: ${func(str)}`);
	console.log(`Converted by: ${func.name}`)
}

converterText('Hello to everyone!', upperFirstWord);
console.log('-------------');
converterText('Hello to everyone!', removeSpaces);

