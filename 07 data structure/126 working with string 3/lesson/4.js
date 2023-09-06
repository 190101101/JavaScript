const message = 'Hi there!';
console.log(message.padStart(20, '++'));
console.log(message.padEnd(20, '++'));

const maskCreditCard = function(cardNumber){
	const strCardNumber = cardNumber + '';
	const maskedNumber = strCardNumber.slice(-4).padStart(12, '*');
	return maskedNumber;
}

console.log(maskCreditCard('3214654978946544'));
console.log(maskCreditCard(9876456732146587));