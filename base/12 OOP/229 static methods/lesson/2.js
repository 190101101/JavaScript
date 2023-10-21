const Person = function(name, year){
	this.name = name;
	this.year = year;
};

Person.highFive = function(){
	console.log('high five');
}

Person.highFive();

const kuki = new Person('kuki', 2015);

Person.prototype.highFive = function(){
	console.log(this.name + ' high five');
}

kuki.highFive();