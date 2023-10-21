const skills = function(skills){
	const [attack, weakener, buff] = [...skills];
	this.skills.push({
		attack: attack,
		weakener: weakener,
		buff: buff,
	});
}

const prof = function(name){
	this.prof = name;
}

const person1 = {
	race: 'elf',
	level: 20,
	prof: undefined,
	skills: []
}

skills.call(person1, ['Prominence', 'Surrender To Fire', 'Concentration']);
prof.call(person1, 'Sorcerer');
console.log(person1);