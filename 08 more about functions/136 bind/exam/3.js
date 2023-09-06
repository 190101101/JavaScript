const person = {
	name: undefined,
	getName(name){
		this.name = name;
	}
};


const newPerson = person.getName.bind(person);
newPerson('apsi');
console.log(person.name);