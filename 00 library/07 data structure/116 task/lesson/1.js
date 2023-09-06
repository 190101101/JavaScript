'use strict'

const game = {
	team1: 'REAL MADRID',
	team2: 'BARCELONA',
	players: [
		[
			'Courtois',
			'Vazquez',
			'Militao',
			'Nacho',
			'Mendy',
			'Casemiro',
			'Valverde',
			'Modrich',
			'Kroos',
			'Vinicius',
			'Benzema',
		],
		[
			'Stegen',
			'Mingueza',
			'Araujo',
			'Lenglet',
			'Dest',
			'Busquets',
			'Jong',
			'Alba',
			'Messi',
			'Pedri',
			'Dembele',
		],
	],
	score: '2:1',
	scored: ['Kroos', 'Benzema', 'Mingueza'],
	date: 'Apr 10th, 2021',
	odds: {
		team1: 1.48,
		draw: 2.53,
		team2: 4.25,
	},
};

// 1
for(const [index, score] of game.scored.entries()){
	console.log(`Goal ${index + 1} : ${score}`)
}

//2
const odds = Object.values(game.odds);
let sum = 0;
for(let i = 0; i < odds.length; i++){
	sum += odds[i]
}
const result = (sum / odds.length).toPrecision(3);
console.log(`average coefficient: ${result}`);

//3
for(const [odd, name] of Object.entries(game.odds)){
	
}

