const orders = new Set([
    'Sushi',
    'Ramen',
    'Tempura',
    'Ramen',
]);

for(const order of orders){
    console.log(order);
}

// Remove dublicate
const mealIngridients = [
    'Rice',
    'Pepper',
    'Garlic',
    'Pepper',
    'Meat',
    'Garlic',
    'Meat',
];
console.log(mealIngridients);


const mealIngridientsUnique = [...mealIngridients];
console.log(mealIngridientsUnique);

