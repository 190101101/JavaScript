let f1;

const f2 = function(){
	const x = 11;
	f1 = function(){
		console.log(x ** 2);
	}
}

f2();
f1();