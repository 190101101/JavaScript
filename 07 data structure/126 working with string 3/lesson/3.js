const capitalizeName = function(name){

	const names = name.split(' ');

	const namesCapitalized = [];
	for(const item of names){
		namesCapitalized.push(item.replace(item[0],item[0].toUpperCase()));
	}
	capitalizedFullName = (namesCapitalized.join(' '));
	console.log(capitalizedFullName);
}

capitalizeName('cookie cookies');
capitalizeName('apsi the cat');