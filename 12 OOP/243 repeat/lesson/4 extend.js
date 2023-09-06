class Animal {

}

class Cat {
	
}

Cat.prototype = Object.create(Animal.prototype);

const kuki = new Cat();

console.log(kuki);
