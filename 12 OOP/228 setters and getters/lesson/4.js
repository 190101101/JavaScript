class Person{
	constructor(fullname, year){
		this.fullname = fullname;
		this.year = year;
	}

	set fullname(personName){
		if(personName.includes(' ')){
			this._fullname = personName;
		}else{
			console.log('nope');
		}
	}

	get fullname(){
		return this._fullname;
	}
}


const kuki = new Person('kuki kikusi', 2015);
console.log(kuki.fullname);

const apsi = new Person('apsi', 2015);
console.log(apsi.fullname);