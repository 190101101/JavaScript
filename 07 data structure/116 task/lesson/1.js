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
for(const [goal, player] of game.scored.entries()){
	console.log(`Goal ${player}: ${goal + 1}`);
}

// 2
const odds = Object.values(game.odds);
sum = 0;
for(const odd of odds){
	sum += odd;
}
const avgCoef = (sum / odds.length).toPrecision(3);
console.log(`average coefficient: ${avgCoef}`);

// 3
console.log(`Rate for ${game.team1} victory: ${game.odds.team1}`);
console.log(`draw chances ${game.odds.draw}`);
console.log(`Rate for ${game.team2} victory: ${game.odds.team2}`);

// 4
// const GoalScorers