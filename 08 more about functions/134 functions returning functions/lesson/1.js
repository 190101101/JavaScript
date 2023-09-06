const greet = function(greeting){
	return function(name){
		console.log(`${greeting} ${name}`);
	}
}

const hi = greet('hi');
hi('cookie');
hi('apsi');
hi('ketty');

greet('hi')('dally');