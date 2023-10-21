const removeSpaces = function(text){
	return text.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(text){
	const [first, ...others] = text.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order Function
const converter = function(str, func){
	console.log(`The original text:: ${str}`)
	console.log(`The converted text: ${func(str)}`)
	console.log(`converted by: ${func.name}`)
}

converter('hello to everyone', upperFirstWord);
converter('hello to everyone', removeSpaces);

// Callback functions are very common in JS
const twice = num => console.log(num * 2);
[1,2,3].forEach(twice);