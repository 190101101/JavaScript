let diceNumber = Math.trunc(Math.random() * 10) + 1;

while(diceNumber !== 10){
	console.log(diceNumber);
	diceNumber = Math.trunc(Math.random() * 10) + 1;
}