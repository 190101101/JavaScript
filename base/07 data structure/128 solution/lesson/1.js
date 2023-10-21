const text = 'underscore_case first_name next_Variable Calculate_AGE arrived_flight';
const lines = text.split(' ');

for(const line of lines){
	const [first, second] = line.toLowerCase().trim().split('_');
	const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
	console.log(output);
}