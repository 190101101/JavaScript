class Car{
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
	}

	get speedMph(){
		return this.speed / 1.6;
	}

	set speedMph(speed){
		this.speed = speed * 1.6;
	}

	accelerate(){
		this.speed += 5;
		console.log(`speed: ${this.speed} +`);
	}

	break(){
		this.speed -= 5;
		console.log(`speed: ${this.speed} -`);
	}
}

const car1 = new Car('bmw', 120);

console.log(car1.speedMph);
car1.break();
car1.break();
car1.break();
car1.break();

car1.speedMph = 120;
console.log(car1.speedMph);
