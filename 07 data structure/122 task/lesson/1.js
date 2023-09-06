const events = new Map([
	[19, 'Goal'],
	[21, 'Substitution'],
	[43, 'Goal'],
	[56, 'Substitution'],
	[69, 'Yellow card'],
	[73, 'Substitution'],
	[75, 'Yellow card'],
	[79, 'Substitution'],
	[81, 'Red card'],
	[93, 'Goal'],
]);

// 1
const gameEvents = new Set(events.values());
console.log(gameEvents);

// 2
events.delete(75);
console.log(events);

// 3
console.log(`On average, an event occurred every ${[...events.keys()].length} minutes`);

// 4
for(const [time, event] of events){
	const text = time < 45 ? 'first' : 'second';
	console.log(`${text} time: ${time} event: ${event}`);
}