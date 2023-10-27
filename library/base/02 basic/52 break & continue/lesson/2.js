let arr = [11, 22, 'cookie', 'caiser', user={name:'caiser'}, 33];

for (let i = 0; i < arr.length; i++){
	if(typeof arr[i] !== 'string') continue;
	console.log(arr[i]);
}

console.log('-----')

for (let i = 0; i < arr.length; i++){
	if(typeof arr[i] !== 'number') break;
	console.log(arr[i]);
}
