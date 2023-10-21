const hello = function(hello){
	return function(name){
		console.log(`${hello} ${name}`);
	}
}

hello('hello')('cookie');

const greet = greeting => name => console.log(`${greeting} ${name}`);;
greet('hello')('apsi');