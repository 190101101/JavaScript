const unspace = function(text){
	return text.replaceAll(' ', '');
}

const firstUpper = function(text){
	const [first, ...others] = text.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
}

console.log(unspace('cookie the cat'));
console.log(firstUpper('cookie the cat'));


const converter = function(text, name){
	return console.log(`${name(text)}`)
}

converter('cookie the cat', unspace);
converter('cookie the cat', firstUpper);


const converter2 = (text) => (name) => console.log(`${name(text)}`);
converter2('cookie the cat', unspace);
converter2('cookie the cat', firstUpper);
