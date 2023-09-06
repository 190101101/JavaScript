const counter = function(){
	let count = 0;
	return function(){
		count++;
		console.log(`${count}`);
	}
}

let count = counter();

count();
count();
count();
count();
count();