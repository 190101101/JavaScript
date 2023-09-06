const upperfirstLetter = function(text){
	const [first, ...others] = text.split('');
	return [first.toUpperCase(), ...others].join('');
}

const converter = function(text, method){
	console.log(`the original text: ${text}`);
	console.log(`the converted text: ${method(text)}`);
	console.log(`converted by: ${method.name}`);
}

converter('apsi', upperfirstLetter);