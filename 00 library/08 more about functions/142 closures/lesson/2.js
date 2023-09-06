let f1;

const f2 = function(){
	const x = 11;
	f1 = function(){
		console.log(x ** 2);
	}
}

const f3 = function(){
	const y = 12;
	f1 = function(){
		console.log(y ** 2);
	}
}

f2();
f1();

console.dir(f1);

f3();
f1();

console.dir(f1);