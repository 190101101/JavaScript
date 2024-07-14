const Person = function(name, year){
	this.name = name;
	this.year = year;
}

const kuki = new Person('kuki', 2015);
const apsi = new Person('apsi', 2009);

Person.prototype.printAge = function(){
	console.log(2022 - this.year);
}

// Person.prototype
console.log(kuki.__proto__);

// Object.prototype - верхушка цепи прототипов 
console.log(kuki.__proto__.__proto__);

// null
console.log(kuki.__proto__.__proto__.__proto__);

//true
console.log(kuki.hasOwnProperty('year'));

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);
