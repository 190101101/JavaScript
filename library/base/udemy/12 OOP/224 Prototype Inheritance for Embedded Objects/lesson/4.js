const Person = function(name, year){
	this.name = name;
	this.year = year;
}

Person.prototype.printAge = function(){
	console.log(2023 - this.year);
}

const kuki = new Person('kuki', 2015);

kuki.printAge();

console.log(kuki.__proto__);
console.log(kuki.__proto__.__proto__);
console.log(kuki.__proto__.__proto__.__proto__);