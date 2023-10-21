const removeSpaces = function(text){
	return text.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function(text){
	const [first, second] = text.split(' ');
	return first.replace(first[0], first[0].toUpperCase()) + ' ' + second;
}

console.log(upperFirstWord('orxan shirinov'));