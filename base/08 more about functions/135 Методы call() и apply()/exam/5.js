const orders = function(order){
	const [dish, additive] = order;

	this.orders.push({
		dish:dish,
		additive:additive
	});
}

const table1 = {
	person: 'john',
	orders: []
}

orders.call(table1, ['sushi', 'soy sauce']);
console.log(table1);

//

const table2 = {
	person: 'Apsi',
	orders: []
}

orders.call(table2, ['rise', 'meat']);
console.log(table2);

