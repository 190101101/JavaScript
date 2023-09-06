const maskCreditCard = function(cardNumber){
	const strCardNumber = String(cardNumber);
	const lastFour =  strCardNumber.slice(-4);
	return lastFour.padStart(strCardNumber.length, '*');
}

console.log(maskCreditCard(9475515494799640));
console.log(maskCreditCard('9475515494795497'));