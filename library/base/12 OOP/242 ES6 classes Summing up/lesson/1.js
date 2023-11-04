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

class ElectroCar extends Car{
	#battery;

	constructor(name, speed, battery){
		super(name, speed);
		this.#battery = battery;
	}

	chargeBattery(chargeLevel){
		this.#battery += chargeLevel;
		return this;
	}

	accelerate(){
		this.speed += 10;
		this.#battery;
		console.log(`speed: ${this.speed}, battery: ${this.#battery}`);
		return this;
	}

	break(){
		this.speed -= 5;
		console.log(`speed: ${this.speed}`);
		return this;
	}
}

const car1 = new ElectroCar('tesla', 100, 33);
console.log(car1);

car1.accelerate().accelerate().chargeBattery(30).accelerate().break();