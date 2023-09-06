const greet = greetingText => name => 
	console.log(`${greetingText} ${name}`);

const hi = greet('hi');

hi('Jack');