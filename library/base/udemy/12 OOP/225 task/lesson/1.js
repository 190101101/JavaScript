class Car{
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
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

const car1 = new Car('bmw', 150);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.break();
car1.break();
car1.break();
car1.break();
car1.accelerate();
