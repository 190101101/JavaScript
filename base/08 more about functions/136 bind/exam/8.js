const box1 = {
	name: 'first box',
	colors: [],
	add(...color){
		this.colors.push(color);
	}
}

const newBox = box1.add.bind(box1);
newBox('red', 'green', 'white');
console.log(box1);
