const Cat = function(name, age){
	this.name = name;
	this.age = age;
}

Cat.prototype.setColor = function(color){
	this.color = color;
}

Cat.prototype.getColor = function(){
	return this.color;
}

const kuki = new Cat('kuki', 7);
console.log(kuki);

kuki.setColor('white');
console.log(kuki.getColor());
