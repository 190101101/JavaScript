const someText = 'underscore_case first_name next_Variable Calculate_AGE arrived_flight';
const splited = someText.split(' ');

const wordsCapitalized = [];

for(const item of splited){
	const [first, second] = item.toLowerCase().split('_');
	wordsCapitalized.push(first + second.replace(second[0], second[0].toUpperCase()));
}

const normalWords = wordsCapitalized.join('\n');
console.log(normalWords);
