const Person = function(name, year){
	this.name = name;
	this.year = year;
}

const kuki = new Person('kuki', 2015);
const apsi = new Person('apsi', 2009);

Person.prototype.printAge = function(){
	return 2022 - this.year;
}

console.log(kuki.printAge());
console.log(apsi.printAge());