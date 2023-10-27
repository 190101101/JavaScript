const calculateBmi = (user) => {
	return (user.weight / Math.pow(user.height, 2)).toPrecision(4);
}

user1 = {
	firstName: 'Jack',
	lastName: 'White',
	height: 1.70,
	weight: 79,
};

user2 = {
	firstName: 'Mike',
	lastName: 'Black',
	height: 1.93,
	weight: 93,
};

user1.bmi = calculateBmi(user1);
user2.bmi = calculateBmi(user2);

if(user1.bmi > user2.bmi)
{
	console.log(`jack has more bmi than mike ` + (user1.bmi - user2.bmi).toPrecision(3));
}
else if(user1.bmi < user2.bmi){
	console.log(`mike has more bmi than jack ` + (user2.bmi - user1.bmi).toPrecision(3));
}
else{
	console.log('bmi users are equal');
}
