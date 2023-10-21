const orders = new Set([
    'Sushi',
    'Ramen',
    'Tempura',
    'Ramen',
]);

console.log(orders);
console.log(orders.size);

orders.add('pizza');
console.log(orders);

orders.delete('pizza');
console.log(orders);

console.log(orders.has('pizza'));
console.log(orders.has('Sushi'));

orders.add('Edamame');
console.log(orders);

console.log(orders.clear());
console.log(orders);

