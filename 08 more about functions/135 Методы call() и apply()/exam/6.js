const box1 = {
	name: 'first box',
	colors: [],
	add(color){
		this.colors.push(color);
	}
}

box1.add('red');
box1.add('green');
console.log(box1);

box1.add.call(box1, 'indigo');
console.log(box1);


// apply
const add = function(color, code){
	this.colors.push({
		obj: color,
		code: code
	});
}

add.apply(box1, ['white', '#fff']);
console.log(box1);