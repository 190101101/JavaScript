const greet = (greetingText) => {
	return function(name){
		console.log(`${greetingText} ${name}`);
	}
}

const hi = greet('hi');

hi('Jack');