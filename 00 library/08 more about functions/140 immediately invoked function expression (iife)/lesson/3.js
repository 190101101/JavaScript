(function(){
	let name = 'orxan';
	var newName = 'orxan';
})();

console.log(name); //error
console.log(newName); //error

// -----------------------

{
	const x = 1;
	var y = 2;
}

console.log(x); // error
console.log(y); // not error