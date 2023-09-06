const capitalizeName = function(name){
	const values = name.split(' ');
	const nameCapitalize = [];

	for(const key of values){
		nameCapitalize.push(
			key[0].toUpperCase() + key.slice(1)
		);
	}

	return nameCapitalize.join(' ');
}

console.log(capitalizeName('cookie the cat'));
console.log(capitalizeName('apsi cat'));

