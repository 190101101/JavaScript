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
	scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
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

// 2
let oddSum = 0;
for(const odd of Object.values(game.odds)){
	oddSum += odd;
}
const averageOdd = (oddSum / Object.values(game.odds).length).toPrecision(3);
console.log(`average coefficient: ${averageOdd}`);

// 3
for(const [teamName, odd] of Object.entries(game.odds)){
	const mutableText = teamName == 'draw' ? 'draw:' : `${game[teamName]} to victory:`;
	console.log(`Rate for ${mutableText} ${odd}`);
}

// 4
const goalScorers = {};
for(const player of game.scored){
	goalScorers[player] ? goalScorers[player] ++ : goalScorers[player] = 1;
}
console.log(goalScorers);