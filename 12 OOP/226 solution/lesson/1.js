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

const car1 = new Car('bmw', 120);
car1.accelerate();
car1.accelerate();
car1.break();
car1.break();
car1.accelerate();
car1.accelerate();
car1.accelerate();
