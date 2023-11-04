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

class ElectroCar{
	constructor(name, speed){
		Car.call(name, speed);
		this.battery = battery;
	}

	chargeBattery(chargeLevel){
		this.battery += chargeLevel;
	}

	accelerate(){
		this.speed += 10;
		this.battery;
		console.log(`speed: ${this.speed} +`);
	}

}

