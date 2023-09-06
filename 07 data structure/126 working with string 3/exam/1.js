// 1
const text = 'Hello Cookie';
const newText = text.split(' ').join('+');
console.log(newText);

// 2
const [p1, p2] = text.split(' ');
console.log(p1, p2);

// 3
const person = 'mr. cookie cookies';
let personName = '';
for(const item of person.split(' ')){
	personName += item.replace(item[0], item[0].toUpperCase());
}
console.log(personName);

// 4
console.log('hello'.padStart(10, '****'));

// 5
const maskCreditCard = function(cardNumber){
	const p1 = cardNumber + '';
	const p2 = p1.slice(-4);
	const p3 = p2.padStart(cardNumber.length - 4, '*'); 	
	return p3;
}

console.log(maskCreditCard(6541654123456987));
console.log(maskCreditCard('6541654123456987'));

// 6
console.log('Hello'.repeat(10));