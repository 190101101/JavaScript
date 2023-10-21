const message = 'Hi there!';
console.log(message.padStart(20, '++'));
console.log(message.padEnd(20, '++'));

const maskCreditCard = function(cardNumber){
	const strCardNumber = cardNumber + '';
	const last4 = strCardNumber.slice(-4);
	return last4.padStart(strCardNumber.length, '*');
}

console.log(maskCreditCard('3214654978946544'));
console.log(maskCreditCard(9876456732146587));