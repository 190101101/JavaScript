const Car = function(name, speed){
	this.name = name;
	this.speed = speed;
}

Car.prototype.accelerate = function(){
	this.speed += 5;
	console.log(`name: ${this.name} / speed: ${this.speed} +`);
}

Car.prototype.break = function(){
	this.speed -= 5;
	console.log(`name: ${this.name} / speed: ${this.speed} -`);
}

const ElectricCar = function(name, speed, battery){
	Car.call(this, name, speed);
	this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function(chargeLevel){
	this.battery = chargeLevel;
}

ElectricCar.prototype.accelerate = function(){
	this.speed += 10;
	this.battery -= 1;
}

const tesla = new ElectricCar('tesla', 100, 33);
console.log(tesla);

tesla.chargeBattery(70);

console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

console.log(tesla);
