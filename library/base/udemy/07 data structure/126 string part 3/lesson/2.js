const capitalizeName = function(name){
	const values = name.split(' ');
	const nameCapitalize = [];

	for(const key of values){
		nameCapitalize.push(
			key.replace(key[0], key[0].toUpperCase())
		);
	}

	return nameCapitalize.join(' ');
}

console.log(capitalizeName('cookie the cat'));
console.log(capitalizeName('apsi cat'));

