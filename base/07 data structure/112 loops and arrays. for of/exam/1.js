const obj = {
	name: 'some obj',
	colors: ['red', 'green', 'blue', 'black', 'white', 'pink']
};

for(const [num, color] of obj.colors.entries()){
	console.log(`${num+1}: ${color}`);
}