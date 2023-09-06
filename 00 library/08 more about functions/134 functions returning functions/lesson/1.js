const greet = function(greetingText){
	return function(name){
		console.log(`${greetingText} ${name}`);
	}
}

greet('Hi')('Lilu');

const hi = greet('hi');

hi('Jack');
hi('Diana');
hi('Mick');

