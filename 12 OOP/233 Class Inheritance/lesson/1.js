const Person = function(name, year){
	this.name = name;
	this.year = year;
}

Person.prototype.printAge = function(){
	console.log(2023 - this.year);
}

const Student = function(name, year, dept){
	this.name = name;
	this.year = year;
	this.dept = dept;
}

Student.prototype.introduce = function(){
	console.log(`my name is ${this.name} and i study on the ${this.dept} department`)
}

const apsi = new Student('apsi', 2009, 'programing');
console.log(apsi);
apsi.introduce();
