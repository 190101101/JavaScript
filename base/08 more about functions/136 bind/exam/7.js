const obj = {
	meals: [],
	add(...meal){
		this.meals.push(...meal);
	}
};

const newBind = obj.add.bind(obj);
newBind('meat', 'rise', 'egg');
console.log(obj);

const newCall = obj.add.call(obj, 'luggage', 'potato', 'sushi');
console.log(obj);
