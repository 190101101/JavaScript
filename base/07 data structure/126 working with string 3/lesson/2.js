/*
oops
const splitName = name.split(' ');
const normalName = splitName[0].slice(0, 1).toUpperCase() + splitName[0].slice(1) + ' ' + splitName[1];
*/

const capitalizeName = function(name){

	const names = name.split(' ');

	const namesCapitalized = [];
	for(const item of names){
		namesCapitalized.push(item[0].toUpperCase() + item.slice(1));
	}
	capitalizedFullName = (namesCapitalized.join(' '));
	console.log(capitalizedFullName);
}

capitalizeName('cookie cookies');
capitalizeName('apsi the cat');