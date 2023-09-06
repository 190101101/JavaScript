const data = 'underscore_case first_name next_Variable Calculate_AGE arrived_flight';

const splitData = data.split(' ');
let newData = false;

for(const stringKey of splitData){
	const [key, value] = stringKey.split('_');
	newData += 
		key.toLowerCase() 
		+ value[0].toUpperCase().trim()
		+ value.slice(1).toLowerCase().trim()
		+ '\n';
}

console.log(newData);